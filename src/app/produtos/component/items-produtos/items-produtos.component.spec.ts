import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsProdutosComponent } from './items-produtos.component';

describe('ItemsProdutosComponent', () => {
  let component: ItemsProdutosComponent;
  let fixture: ComponentFixture<ItemsProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
