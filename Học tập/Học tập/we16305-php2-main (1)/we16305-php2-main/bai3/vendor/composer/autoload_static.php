<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit223de36a23854432666e3551d21dae0e
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit223de36a23854432666e3551d21dae0e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit223de36a23854432666e3551d21dae0e::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit223de36a23854432666e3551d21dae0e::$classMap;

        }, null, ClassLoader::class);
    }
}
