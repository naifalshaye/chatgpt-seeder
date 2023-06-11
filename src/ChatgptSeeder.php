<?php

namespace Naif\ChatgptSeeder;

use Illuminate\Http\Request;
use Laravel\Nova\Menu\MenuSection;
use Laravel\Nova\Nova;
use Laravel\Nova\Tool;

class ChatgptSeeder extends Tool
{
    /**
     * Perform any tasks that need to happen when the tool is booted.
     *
     * @return void
     */
    public function boot()
    {
        Nova::script('chatgpt-seeder', __DIR__.'/../dist/js/tool.js');
        Nova::style('chatgpt-seeder', __DIR__.'/../dist/css/tool.css');
    }

    /**
     * Build the menu that renders the navigation links for the tool.
     *
     * @param  \Illuminate\Http\Request $request
     * @return mixed
     */
    public function menu(Request $request)
    {
        return MenuSection::make('Chatgpt Seeder')
            ->path('/chatgpt-seeder')
            ->icon('server');
    }
}
