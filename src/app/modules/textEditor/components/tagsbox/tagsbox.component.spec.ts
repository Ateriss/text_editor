import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsboxComponent } from './tagsbox.component';

describe('TagsboxComponent', () => {
  let component: TagsboxComponent;
  let fixture: ComponentFixture<TagsboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagsboxComponent]
    });
    fixture = TestBed.createComponent(TagsboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
