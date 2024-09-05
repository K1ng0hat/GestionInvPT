<?php

return [

    'defaults' => [
        // Guard por defecto a 'api' para usar JWT
        'guard' => 'api',
        'passwords' => 'users',
    ],

    'guards' => [
        // Guard basado en sesiones
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],

        // Guard 'api' usando el driver 'jwt'
        'api' => [
            'driver' => 'jwt', // 'jwt' // sesion
            'provider' => 'users',
            'hash' => false,
        ],
    ],

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => App\Models\User::class, // model User que usa JWT
        ],
    ],

    'passwords' => [
        'users' => [
            'provider' => 'users',
            'table' => 'password_reset_tokens',
            'expire' => 60,
            'throttle' => 60,
        ],
    ],

    'password_timeout' => 10800,

];
