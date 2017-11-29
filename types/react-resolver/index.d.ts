// Type definitions for react-resolver 3.1
// Project: https://github.com/ericclemmons/react-resolver
// Definitions by: forabi <https://github.com/forabi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ComponentType, StatelessComponent, Factory } from 'react';

export type AnyComponent<P> = ComponentType<P>;

export interface Resolver {
    resolve<P, D>(
    factory: Factory<P>,
    ): Promise<{
    data: D;
    Resolved: StatelessComponent<P>;
    }>;

    render<P>(factory: Factory<P>, root: Node | null): void;
}

export const Resolver: Resolver;

export type ResolveFn<Props, V> = (props: Props) => Promise<V>;

/** Use this for gaining access to a context as a prop without the boilerplate of setting `contextTypes`. */
export function context<K extends string, V = any>(
    prop: K,
): <OwnProps>(
    component: AnyComponent<OwnProps>,
) => StatelessComponent<OwnProps & Record<typeof prop, V>>;

/**
 * Use `@client(LoaderComponent)` (or `client(LoaderComponent)(YourComponent)`)
 * for when you want to skip server-side rendering of part of your view and
 * perform it only on the client.
 */
export function client(
    loadingComponent: AnyComponent<any>,
): <OwnProps>(
    component: AnyComponent<OwnProps>,
) => StatelessComponent<OwnProps>;

export function resolve<
    OwnProps,
    K extends string,
    V,
    MoreProps = { [x: string]: any }
>(
    prop: K,
    resolveFn: ResolveFn<OwnProps & MoreProps, V>,
): (
    component: AnyComponent<OwnProps & { [C in K]: V }>,
) => StatelessComponent<OwnProps & MoreProps>;

export function resolve<
    OwnProps,
    ResolvableProps = { [x: string]: any },
    MoreProps = { [x: string]: any }
>(
    resolversMap: {
    [K in keyof ResolvableProps]: ResolveFn<
        OwnProps & MoreProps,
        ResolvableProps[K]
    >
    },
): (
    component: AnyComponent<
    OwnProps & { [K in keyof ResolvableProps]?: ResolvableProps[K] }
    >,
) => StatelessComponent<OwnProps & MoreProps>;
