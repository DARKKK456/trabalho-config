import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'config',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./perfil/editar/editar.module').then( m => m.EDITARPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./perfil/config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./perfil/support/support.module').then( m => m.SupportPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
