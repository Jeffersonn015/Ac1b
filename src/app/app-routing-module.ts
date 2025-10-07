import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home} from './home/home';
import { produto } from './produto/produto';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { SobreNos } from './sobre-nos/sobre-nos';

const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'produtos', component: produto },
  { path: 'sobre', component: SobreNos },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sobre', component: SobreNos },
  { path: 'produto-detalhe/:id', component: ProdutoDetalhe },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
