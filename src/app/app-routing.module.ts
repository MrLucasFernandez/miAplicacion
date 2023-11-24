import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthOnlineGuard } from './guards/authonline.guard';
import { AuthProfesorGuard } from './guards/authprofesor.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthOnlineGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'restore',
    loadChildren: () => import('./restore/restore.module').then( m => m.RestorePageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioPageModule),
    canActivate: [AuthOnlineGuard]
  },
  {
    path: 'ramos',
    loadChildren: () => import('./ramos/ramos.module').then( m => m.RamosPageModule),
    canActivate: [AuthOnlineGuard, AuthProfesorGuard]
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule),
    canActivate: [AuthOnlineGuard]
  },
  {
    path: 'qrscan',
    loadChildren: () => import('./qrscan/qrscan.module').then( m => m.QrscanPageModule),
    canActivate: [AuthOnlineGuard]
  },
  {
    path: 'qrgen',
    loadChildren: () => import('./qrgen/qrgen.module').then( m => m.QrgenPageModule),
    canActivate: [AuthOnlineGuard, AuthProfesorGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  
  
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
