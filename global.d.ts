interface NestedMFEOptions {
  initialPath: string;
  defaultHistory?: any;
  userToken?: string;
  onNavigate: ({ pathname: string }) => void;
  onSignIn?: () => void;
}

interface NestedMFEMountResult {
  onParentNavigate: ({ pathname: string }) => void;
}
declare module 'auth/*' {
  const mount: (
    el: HTMLElement,
    options: NestedMFEOptions,
  ) => NestedMFEMountResult;

  export { mount };
}

declare module 'cms/*' {
  const mount: (
    el: HTMLElement,
    options: NestedMFEOptions,
  ) => NestedMFEMountResult;

  export { mount };
}
