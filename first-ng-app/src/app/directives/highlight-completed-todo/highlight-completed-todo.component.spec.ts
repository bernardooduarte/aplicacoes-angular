import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightCompletedTodoComponent } from './highlight-completed-todo.component';

describe('HighlightCompletedTodoComponent', () => {
  let component: HighlightCompletedTodoComponent;
  let fixture: ComponentFixture<HighlightCompletedTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightCompletedTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightCompletedTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
