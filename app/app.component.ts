import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav class="navbar navbar-inverse">
            <div class="navbar-header">
                <a href="/" class="navbar-brand">My angular App!</a>
            </div>
            </nav>
        </header>
        <div class="jumbotron">
            <h1>Welcome to our App!!</h1>
        </div>

        <footer class="text-center">
            Copyright &copy; 2017.
        </footer>
    `
})

export class AppComponent { }

 