import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGameComponent } from './item-game.component';

describe('ItemGameComponent', () => {
  let component: ItemGameComponent;
  let fixture: ComponentFixture<ItemGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
