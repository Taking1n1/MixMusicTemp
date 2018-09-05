<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class ContactUsController extends Controller
{
    /**
     * @Route("/contactus", name="contactus")
     */
    public function contactusAction(Request $request, \Swift_Mailer $mailer)
    {
        // Sets up client
        $client = new Client(['base_uri' => 'https://www.google.com/']);
        try {
            // Posts response
            $responseparam = $request->request->get("g-recaptcha-response");
            $response = $client->request('POST', "recaptcha/api/siteverify?secret=6LcRk24UAAAAADKwnUtGcArpjntdbOQpQyHLWZS7&response=$responseparam");

            // Returns response
            $response_json = json_decode($response->getBody(), true);

            // Captcha passed, send email
            if ($response_json["success"])
            {
                $message = (new \Swift_Message($request->request->get("name") . ' has sent a message!'))
                    ->setFrom("mixmusic465@gmail.com")
                    ->setTo("info@mix-music.co.uk")
                    ->setBody(
                        $this->renderView('contactusmessage.html.twig',
                            [
                                "name" => $request->request->get("name"),
                                "email" => $request->request->get("email"),
                                "message" => $request->request->get("message"),
                            ]), 'text/html'
                    );

                if ($mailer->send($message))
                    return $this->json("success");
                else
                    return $this->json(["error" => "couldn't send email"]);
            }
            else
            {
                // Captcha failed, send error
                return $this->json([
                    "error" => "verification failed",
                    "error_codes" => $response_json["error-codes"]
                ]);
            }
        }
        catch (GuzzleException $ge) {
            return $this->json([
                "error" => "problem with POST request to google",
                "error_code" => $ge->getCode(),
                "error_message" => $ge->getMessage(),
                "error_trace" => $ge->getTraceAsString()
            ]);
        }
    }
}