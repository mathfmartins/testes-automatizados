import { LikeWidgetModule } from './../like-widget.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from './../../../services/unique-id.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeInstanceOf(LikeWidgetComponent);
  });

  it(`Should auto generate ID when id input property is missing`, () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it(`Should NOT auto generate ID when id input property is not missing`, () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger emission when called`, (done) => {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      expect(true).toBeTrue();
      done();
    });
    component.like();
  });

});
