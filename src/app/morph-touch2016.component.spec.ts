import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MorphTouch2016AppComponent } from '../app/morph-touch2016.component';

beforeEachProviders(() => [MorphTouch2016AppComponent]);

describe('App: MorphTouch2016', () => {
  it('should create the app',
      inject([MorphTouch2016AppComponent], (app: MorphTouch2016AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'morph-touch2016 works!\'',
      inject([MorphTouch2016AppComponent], (app: MorphTouch2016AppComponent) => {
    expect(app.title).toEqual('morph-touch2016 works!');
  }));
});
