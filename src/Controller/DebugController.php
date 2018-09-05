<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DebugController extends Controller
{
    /**
     * @Route("/debug", name="debug")
     */
    public function debugAction(Request $request, \Swift_Mailer $mailer)
    {
        $message = (new \Swift_Message('Matt has sent a message!'))
            ->setFrom("mixmusic465@gmail.com")
            ->setTo("info@mix-music.co.uk")
            ->setBody(
                $this->renderView('contactusmessage.html.twig',
                    [
                        "name" => "Matt",
                        "email" => "taking1n1@gmail.com",
                        "message" => "Hello world",
                    ]), 'text/html'
            );

        if (!$mailer->send($message, $errors))
        {
            return $this->json([
                "failed to send email, dump: " => $errors
            ]);
        }
        else
        {
            return $this->json("sent email");
        }
        //return new Response("Wow! You've found the secret message! Give yourself a pat on the back, and be sure to use Mix-Music's services when it launches!");
    }
}