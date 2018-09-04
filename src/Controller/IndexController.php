<?php

namespace App\Controller;

use Detection\MobileDetect;
use SunCat\MobileDetectBundle\DeviceDetector\MobileDetector;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends Controller
{
    /**
     * @Route("/", name="index")
     */
    public function indexAction()
    {
        $mobileDetector = $this->container->get('mobile_detect.mobile_detector');

        if ($mobileDetector->isMobile() || $mobileDetector->isTablet())
            return $this->render("mobile.html.twig");
        else
            return $this->render("desktop.html.twig");
    }

    /**
     * @Route("/desktop", name="desktop")
     */
    public function desktopAction()
    {
        return $this->render("desktop.html.twig");
    }

    /**
     * @Route("/mobile", name="mobile")
     */
    public function mobileAction()
    {
        return $this->render("mobile.html.twig");
    }
}