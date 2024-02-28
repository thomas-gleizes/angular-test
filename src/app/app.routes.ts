import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './pages/counter/counter.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ReactiveComponent } from './pages/forms/reactive/reactive.component';
import { TemplateComponent } from './pages/forms/template/template.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'counter',
    component: CounterComponent,
    title: 'Counter',
  },
  {
    path: 'forms',
    component: FormsComponent,
    title: 'Forms',
    children: [
      {
        path: 'reactive',
        title: 'Reactive',
        component: ReactiveComponent,
      },
      {
        path: 'template',
        title: 'template',
        component: TemplateComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
    title: 'Redirect to Home',
  },
];
