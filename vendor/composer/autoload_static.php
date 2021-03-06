<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit7b0a29fb5414cdc4d7dd32cb099e387c
{
    public static $prefixLengthsPsr4 = array (
        'Z' => 
        array (
            'Zend\\' => 5,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Zend\\' => 
        array (
            0 => __DIR__ . '/..' . '/zendframework/zendframework/library/Zend',
        ),
    );

    public static $prefixesPsr0 = array (
        'Z' => 
        array (
            'ZfcTwig\\' => 
            array (
                0 => __DIR__ . '/..' . '/zf-commons/zfc-twig/src',
            ),
            'ZendXml\\' => 
            array (
                0 => __DIR__ . '/..' . '/zendframework/zendxml/library',
            ),
            'ZendDiagnostics\\' => 
            array (
                0 => __DIR__ . '/..' . '/zendframework/zenddiagnostics/src',
            ),
            'ZendDiagnosticsTest\\' => 
            array (
                0 => __DIR__ . '/..' . '/zendframework/zenddiagnostics/tests',
            ),
            'ZFTool\\' => 
            array (
                0 => __DIR__ . '/..' . '/zendframework/zftool/src',
            ),
        ),
        'T' => 
        array (
            'Twig_' => 
            array (
                0 => __DIR__ . '/..' . '/twig/twig/lib',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit7b0a29fb5414cdc4d7dd32cb099e387c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit7b0a29fb5414cdc4d7dd32cb099e387c::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit7b0a29fb5414cdc4d7dd32cb099e387c::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
