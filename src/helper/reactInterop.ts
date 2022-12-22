/* eslint-disable */
import {
  createElement,
  ForwardedRef,
  forwardRef,
  Fragment,
  FunctionComponent,
  ReactElement,
  ReactNode,
  // eslint-disable-next-line import/no-unresolved
  Component as ReactComponent,
} from 'react';
import renderer from 'react-hyperscript';
import { matchPath, BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom';

/// JAKE CODE

export type Children = ReactNode | ReactNode[];

export const render = (tag: string | React.ComponentType, attrs: any, ...children: any[]) => {
  if (typeof tag === 'string') {
    return createElement(tag, attrs, ...children);
  } else {
    return createElement(tag, attrs, ...children);
  }
};

render.trust = (html: string, wrapper?: string) => {
  if (wrapper) {
    return createElement(wrapper, { dangerouslySetInnerHTML: { __html: html } });
  } else {
    return createElement('div', { dangerouslySetInnerHTML: { __html: html } });
  }
};

export type Component<Props = unknown> = FunctionComponent<Props>;

export const jsx = createElement;

export type ResultNode<A> = ReactElement<A>;

/// END JAKE CODE

// TODO: verify this works
export abstract class ClassComponent<A = {}> extends ReactComponent<A> {
  protected readonly __props: A;

  public componentDidMount() {
    this.oninit(this.props);
  }

  public componentDidUpdate(prevProps: A) {
    this.onupdate(this.props);
  }

  public componentWillUnmount() {
    this.onremove(this.props);
  }

  render() {
    this.oncreate(this.props);
    return this.view(this.props);
  }

  public oninit(v: Readonly<A>) {}
  public onupdate(v: Readonly<A>) {}
  public onremove(v: Readonly<A>) {}
  public oncreate(v: Readonly<A>) {}

  abstract view(v: Readonly<A>): Children | null;
}

type RouteOptions = {
  replace?: boolean;
};

type Params = { [key: string]: string };

export function setRoute(route: string, data?: any, options?: RouteOptions) {}

export function getRouteParam(name?: string) {}

export function getRoute() {}

export function rootRender(el: Element, vnodes: Children) {
  // React does not have a built-in method for rendering to an element directly.
  // Instead, you can use the `ReactDOM.render` method to render a React component to an element.
  ReactDOM.render(vnodes, el);
}

export function rootMount(element: Element, component?: any | null) {
  // React does not have a built-in method for mounting a component to an element directly.
  // Instead, you can use the `ReactDOM.render` method to render a React component to an element.
  ReactDOM.render(component, element);
}
