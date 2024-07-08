import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextreaderComponent } from './textreader.component';

describe('TextreaderComponent', () => {
  let component: TextreaderComponent;
  let fixture: ComponentFixture<TextreaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextreaderComponent]
    });
    fixture = TestBed.createComponent(TextreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
