<?php

return [

    /*
    |--------------------------------------------------------------------------
    | ChatGPT Nova4 Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for ChatGPT such as, API_Key and Max Tokens to be used per request.
    |
    */

    'chatgpt_api_key' => env('CHATGPT_SEEDER_API_KEY', ''),
    'chatgpt_max_tokens' => env('CHATGPT_SEEDER_MAX_TOKENS', '1000'),
    'chatgpt_generate_retry' => env('CHATGPT_SEEDER_GENERATE_RETRY', '3'),


];
