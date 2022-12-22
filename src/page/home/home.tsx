// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  ClassComponent,
  ResultNode,
  render,
  setRoute,
  getRoute,
  getRouteParam,
  Component,
  jsx,
} from '../../helper/reactInterop';
import m from 'mithril';

class HomePage extends ClassComponent {
  render(): void {
    render(
      <div>
        <h1>Home</h1>
        <p>This is the home page.</p>
      </div>
    );
  }
}

export default HomePage;
