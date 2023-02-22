# laravel-svelte-template.frontend

This is a simple Svelte template for developing front-ends of apps
made with with Laravel (as back-end) and Svelte (as front-end).

It uses SvelteKit in **SPA mode**.

# Set-up Description

* Pre-installed packages
  * Pre-installed `axios`, `pusher-js`, and `laravel-echo`
  * Pre-installed `svelte-dnd-action`
  * Pre-installed `svelte-persistent-store`

* UI component libraries like daisyUI, skeleton, flowbite-svelte, svelteui, etc. can be manually installed. 

* Authentication Module Boilerplate
  * This template comes with an authenticate module boilerplate that
    connects with the corresponding [back-end](https://github.com/lvjhn/laravel9-svelte3-template.backend) 
    template's authentication API through session cookies or Laravel Sanctum
    tokens. 
  * The boilerplate is under the `/auth` route folder. This can be replaced 
    with a customized version. 
  * Log-in with Google or Facebook buttons are prepared in the login screen. 
  * The default authentication module boilerplate uses SvelteUI but other 
    UI component libraries can be used for the actual application.

* [Optional] Mobile : Capacitor Integration
  * This repository can be integrated with Capacitor for developing
    mobile applications.
  * Instructions from third-party source: 
    * https://changenode.com/articles/sveltekit-wcapacitorjs
