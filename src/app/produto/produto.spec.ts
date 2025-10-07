import { ComponentFixture, TestBed } from '@angular/core/testing';

import { produto } from './produto';

describe('Produto', () => {
  let component: produto;
  let fixture: ComponentFixture<produto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [produto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(produto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
