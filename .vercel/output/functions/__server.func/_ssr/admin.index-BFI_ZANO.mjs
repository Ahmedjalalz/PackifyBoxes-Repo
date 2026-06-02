import { Y as reactExports, N as jsxRuntimeExports, R as React } from "./server-BQ-xwmlc.mjs";
import { N as useNavigate, O as useQueryClient, L as Link, B as Button, H as toast, d as cn, S as Slot, g as createLucideIcon, f as createCmsCategory, C as saveCmsProduct, J as uploadCmsImageBase64, k as deleteCmsProduct, v as productFormSchema, K as useComposedRefs, h as createSlot, q as listCmsProducts, p as listCmsCategories } from "./router-WJfh7UaR.mjs";
import { u as useQuery } from "./useQuery-DchO5_X3.mjs";
import { u as useServerFn } from "./useServerFn-Dv5M5Rur.mjs";
import { B as Badge } from "./badge-Bt3S7p68.mjs";
import { I as Input } from "./input-DU1LoEPh.mjs";
import { S as Select, d as SelectTrigger, e as SelectValue, b as SelectContent, c as SelectItem, a as ChevronUp, C as ChevronDown, f as createCollection, g as usePrevious, h as useSize, u as useDirection } from "./select-DdYC0lZX.mjs";
import { D as Dialog, a as DialogContent, d as DialogHeader, e as DialogTitle, b as DialogDescription, c as DialogFooter, P as Presence } from "./dialog-DSgdg9Zt.mjs";
import { S as Search, a as Skeleton } from "./skeleton-CeBsFfq6.mjs";
import { g as getAdminSession, b as signOutAdmin } from "./admin-BdCKbilc.mjs";
import { C as CircleCheck, b as useForm, u, a as useFieldArray, T as Textarea } from "./textarea-Dh9gIid1.mjs";
import { e as useControllableState, a as Primitive$1, c as composeEventHandlers, g as useId, d as createContextScope$1, i as useLayoutEffect2 } from "./Combination-DKTsQdmt.mjs";
import { L as Label } from "./label-CVCEKJi0.mjs";
import { L as LoaderCircle } from "./loader-circle-DU8zxIRk.mjs";
import { m as motion } from "./proxy-CLY1anNz.mjs";
import { S as ShieldCheck } from "./shield-check-BI5_VRrD.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./auth-middleware-CrSDmXli.mjs";
import "./index-BlRNeFf7.mjs";
import "./types-DnP57xCP.mjs";
import "./client-CBuvpRjS.mjs";
const __iconNode$8 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$8);
const __iconNode$7 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$7);
const __iconNode$6 = [
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }],
  ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5", key: "1ue2ih" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
];
const ImagePlus = createLucideIcon("image-plus", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
];
const Package = createLucideIcon("package", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
const Table = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
const TableHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }));
TableBody.displayName = "TableBody";
const TableFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props }));
TableCaption.displayName = "TableCaption";
const Breadcrumb = reactExports.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ol",
    {
      ref,
      className: cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className
      ),
      ...props
    }
  )
);
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ref, className: cn("inline-flex items-center gap-1.5", className), ...props })
);
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = reactExports.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("font-normal text-foreground", className),
      ...props
    }
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({ children, className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {})
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope$1(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive$1.div,
          {
            "data-state": getState$2(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$1 = "CollapsibleTrigger";
var CollapsibleTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME$1, __scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive$1.button,
      {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState$2(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "CollapsibleContent";
var CollapsibleContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME$1, props.__scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent.displayName = CONTENT_NAME$1;
var CollapsibleContentImpl = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME$1, __scopeCollapsible);
  const [isPresent, setIsPresent] = reactExports.useState(present);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = reactExports.useRef(0);
  const height = heightRef.current;
  const widthRef = reactExports.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = reactExports.useRef(isOpen);
  const originalStylesRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive$1.div,
    {
      "data-state": getState$2(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState$2(open) {
  return open ? "open" : "closed";
}
var Root$2 = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [Collection, useCollection, createCollectionScope] = createCollection(ACCORDION_NAME);
var [createAccordionContext] = createContextScope$1(ACCORDION_NAME, [
  createCollectionScope,
  createCollapsibleScope
]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { type, ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeAccordion, children: type === "multiple" ? /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplMultiple, { ...multipleProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplSingle, { ...singleProps, ref: forwardedRef }) });
  }
);
Accordion$1.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(
  ACCORDION_NAME,
  { collapsible: false }
);
var AccordionImplSingle = React.forwardRef(
  (props, forwardedRef) => {
    const {
      value: valueProp,
      defaultValue,
      onValueChange = () => {
      },
      collapsible = false,
      ...accordionSingleProps
    } = props;
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? "",
      onChange: onValueChange,
      caller: ACCORDION_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionValueProvider,
      {
        scope: props.__scopeAccordion,
        value: React.useMemo(() => value ? [value] : [], [value]),
        onItemOpen: setValue,
        onItemClose: React.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionSingleProps, ref: forwardedRef }) })
      }
    );
  }
);
var AccordionImplMultiple = React.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...accordionMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: ACCORDION_NAME
  });
  const handleItemOpen = React.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleItemClose = React.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AccordionValueProvider,
    {
      scope: props.__scopeAccordion,
      value,
      onItemOpen: handleItemOpen,
      onItemClose: handleItemClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionMultipleProps, ref: forwardedRef }) })
    }
  );
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
    const accordionRef = React.useRef(null);
    const composedRefs = useComposedRefs(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
      if (!ACCORDION_KEYS.includes(event.key)) return;
      const target = event.target;
      const triggerCollection = getItems().filter((item) => !item.ref.current?.disabled);
      const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
      const triggerCount = triggerCollection.length;
      if (triggerIndex === -1) return;
      event.preventDefault();
      let nextIndex = triggerIndex;
      const homeIndex = 0;
      const endIndex = triggerCount - 1;
      const moveNext = () => {
        nextIndex = triggerIndex + 1;
        if (nextIndex > endIndex) {
          nextIndex = homeIndex;
        }
      };
      const movePrev = () => {
        nextIndex = triggerIndex - 1;
        if (nextIndex < homeIndex) {
          nextIndex = endIndex;
        }
      };
      switch (event.key) {
        case "Home":
          nextIndex = homeIndex;
          break;
        case "End":
          nextIndex = endIndex;
          break;
        case "ArrowRight":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              moveNext();
            } else {
              movePrev();
            }
          }
          break;
        case "ArrowDown":
          if (orientation === "vertical") {
            moveNext();
          }
          break;
        case "ArrowLeft":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              movePrev();
            } else {
              moveNext();
            }
          }
          break;
        case "ArrowUp":
          if (orientation === "vertical") {
            movePrev();
          }
          break;
      }
      const clampedIndex = nextIndex % triggerCount;
      triggerCollection[clampedIndex].ref.current?.focus();
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionImplProvider,
      {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive$1.div,
          {
            ...accordionProps,
            "data-orientation": orientation,
            ref: composedRefs,
            onKeyDown: disabled ? void 0 : handleKeyDown
          }
        ) })
      }
    );
  }
);
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = useId();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionItemProvider,
      {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root$2,
          {
            "data-orientation": accordionContext.orientation,
            "data-state": getState$1(open),
            ...collapsibleScope,
            ...accordionItemProps,
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2) => {
              if (open2) {
                valueContext.onItemOpen(value);
              } else {
                valueContext.onItemClose(value);
              }
            }
          }
        )
      }
    );
  }
);
AccordionItem$1.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...headerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive$1.h3,
      {
        "data-orientation": accordionContext.orientation,
        "data-state": getState$1(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0,
        ...headerProps,
        ref: forwardedRef
      }
    );
  }
);
AccordionHeader.displayName = HEADER_NAME;
var TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trigger,
      {
        "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
        "data-orientation": accordionContext.orientation,
        id: itemContext.triggerId,
        ...collapsibleScope,
        ...triggerProps,
        ref: forwardedRef
      }
    ) });
  }
);
AccordionTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "AccordionContent";
var AccordionContent$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content,
      {
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation,
        ...collapsibleScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
          ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
          ...props.style
        }
      }
    );
  }
);
AccordionContent$1.displayName = CONTENT_NAME;
function getState$1(open) {
  return open ? "open" : "closed";
}
var Root2 = Accordion$1;
var Item = AccordionItem$1;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger$1;
var Content2 = AccordionContent$1;
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    BaseContext.displayName = rootComponentName + "Context";
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot2 = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeProgress,
      value: valueProp = null,
      max: maxProp,
      getValueLabel = defaultGetValueLabel,
      ...progressProps
    } = props;
    if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) {
      console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
    }
    const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
    if (valueProp !== null && !isValidValueNumber(valueProp, max)) {
      console.error(getInvalidValueError(`${valueProp}`, "Progress"));
    }
    const value = isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressProvider, { scope: __scopeProgress, value, max, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "aria-valuemax": max,
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(value) ? value : void 0,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": getProgressState(value, max),
        "data-value": value ?? void 0,
        "data-max": max,
        ...progressProps,
        ref: forwardedRef
      }
    ) });
  }
);
Progress$1.displayName = PROGRESS_NAME;
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeProgress, ...indicatorProps } = props;
    const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": getProgressState(context.value, context.max),
        "data-value": context.value ?? void 0,
        "data-max": context.max,
        ...indicatorProps,
        ref: forwardedRef
      }
    );
  }
);
ProgressIndicator.displayName = INDICATOR_NAME;
function defaultGetValueLabel(value, max) {
  return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
  return typeof value === "number";
}
function isValidMaxNumber(max) {
  return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
  return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root$1 = Progress$1;
var Indicator = ProgressIndicator;
const Progress = reactExports.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root$1,
  {
    ref,
    className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = Root$1.displayName;
var SWITCH_NAME = "Switch";
var [createSwitchContext] = createContextScope$1(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked ?? false,
      onChange: onCheckedChange,
      caller: SWITCH_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive$1.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive$1.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = reactExports.forwardRef(
  ({
    __scopeSwitch,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
const Switch = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = Root.displayName;
function slugify$1(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function toDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}
function makeSection(items, fallback) {
  return items.length > 0 ? items : [fallback];
}
function formValuesFromProduct(product, categories) {
  return {
    id: product?.id,
    slug: product?.slug ?? "",
    title: product?.title ?? "",
    category_id: product?.category_id ?? categories[0]?.id ?? "",
    short_description: product?.short_description ?? "",
    featured_image: product?.featured_image ?? "",
    is_featured: product?.is_featured ?? false,
    is_published: product?.is_published ?? false,
    meta_title: product?.meta_title ?? "",
    meta_description: product?.meta_description ?? "",
    content_sections: makeSection(product?.content_sections ?? [], {
      heading: "What makes this box special?",
      content: "Describe the product story, packaging benefits, or brand-specific selling points."
    }),
    box_styles: makeSection(product?.box_styles ?? [], {
      title: "Signature style",
      description: "Describe the visual and structural style customers can choose from."
    }),
    materials: makeSection(product?.materials ?? [], {
      title: "Premium stock",
      description: "Explain the material options or finishes that pair with this product."
    }),
    features: product?.features ?? [{ feature: "Premium unboxing experience" }],
    gallery_images: product?.gallery_images ?? []
  };
}
function SectionCard({
  title,
  description,
  children,
  action
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-card shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 border-b p-6 md:flex-row md:items-start md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-ink-muted", children: description })
      ] }),
      action
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children })
  ] });
}
function ErrorText({ children }) {
  if (!children) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children });
}
function FieldRow({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children });
}
function ReorderControls({
  onUp,
  onDown,
  onRemove,
  disableUp,
  disableDown
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", onClick: onUp, disabled: disableUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", onClick: onDown, disabled: disableDown, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", onClick: onRemove, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
  ] });
}
function ProductEditorDialog({
  open,
  onOpenChange,
  product,
  categories,
  onSaved
}) {
  const saveFn = useServerFn(saveCmsProduct);
  const uploadFn = useServerFn(uploadCmsImageBase64);
  const [uploadProgress, setUploadProgress] = reactExports.useState(0);
  const [uploading, setUploading] = reactExports.useState(false);
  const defaultValues = reactExports.useMemo(() => formValuesFromProduct(product, categories), [product, categories]);
  const form = useForm({
    resolver: u(productFormSchema),
    defaultValues,
    values: defaultValues,
    mode: "onBlur"
  });
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = form;
  const contentSections = useFieldArray({ control, name: "content_sections" });
  const boxStyles = useFieldArray({ control, name: "box_styles" });
  const materials = useFieldArray({ control, name: "materials" });
  const features = useFieldArray({ control, name: "features" });
  const galleryImages = useFieldArray({ control, name: "gallery_images" });
  const titleValue = watch("title");
  const slugValue = watch("slug");
  const featuredImage = watch("featured_image");
  const isPublished = watch("is_published");
  const isFeatured = watch("is_featured");
  reactExports.useEffect(() => {
    if (!product && titleValue && (!slugValue || slugValue === slugify$1(product?.title ?? ""))) {
      setValue("slug", slugify$1(titleValue), { shouldValidate: true });
    }
  }, [product, setValue, slugValue, titleValue]);
  reactExports.useEffect(() => {
    if (open) {
      form.reset(defaultValues);
      setUploadProgress(0);
      setUploading(false);
    }
  }, [defaultValues, form, open]);
  async function uploadFiles(files) {
    const uploads = Array.from(files);
    if (uploads.length === 0) return [];
    setUploading(true);
    setUploadProgress(15);
    try {
      const urls = [];
      for (let index = 0; index < uploads.length; index += 1) {
        const file = uploads[index];
        const base64Data = await toDataUrl(file);
        const response = await uploadFn({
          data: {
            fileName: file.name.replace(/[^a-zA-Z0-9._-]/g, "_"),
            contentType: file.type,
            base64Data
          }
        });
        urls.push(response.url);
        setUploadProgress(15 + Math.round((index + 1) / uploads.length * 85));
      }
      return urls;
    } finally {
      setUploading(false);
      setUploadProgress(100);
      setTimeout(() => setUploadProgress(0), 700);
    }
  }
  function collectErrorMessages(value, prefix = "") {
    if (!value || typeof value !== "object") return [];
    return Object.entries(value).flatMap(([key, entry]) => {
      const fieldName = prefix ? `${prefix}.${key}` : key;
      if (!entry) return [];
      if (typeof entry === "string") return [entry];
      if (Array.isArray(entry)) {
        return entry.flatMap((item, index) => collectErrorMessages(item, `${fieldName}[${index}]`));
      }
      if (typeof entry === "object" && "message" in entry && typeof entry.message === "string") {
        return [entry.message];
      }
      return collectErrorMessages(entry, fieldName);
    });
  }
  const onSubmit = handleSubmit(
    async (values) => {
      try {
        const {
          meta_title: _metaTitle,
          meta_description: _metaDescription,
          gallery_images: galleryImagesValues,
          ...restValues
        } = values;
        const payload = {
          ...restValues,
          id: values.id ?? product?.id,
          slug: values.slug.trim(),
          title: values.title.trim(),
          category_id: values.category_id,
          short_description: values.short_description.trim(),
          featured_image: values.featured_image?.trim() || null,
          content_sections: values.content_sections.map((section) => ({
            ...section,
            heading: section.heading.trim(),
            content: section.content.trim()
          })),
          box_styles: values.box_styles.map((style) => ({
            ...style,
            title: style.title.trim(),
            description: style.description.trim()
          })),
          materials: values.materials.map((material) => ({
            ...material,
            title: material.title.trim(),
            description: material.description.trim()
          })),
          features: values.features.map((feature) => ({
            ...feature,
            feature: feature.feature.trim()
          })),
          gallery_images: galleryImagesValues.map((image) => ({
            id: image.id,
            image_url: image.image_url.trim()
          }))
        };
        const saved = await saveFn({ data: payload });
        toast.success(product ? "Product updated" : "Product created");
        onSaved();
        onOpenChange(false);
        return saved;
      } catch (error) {
        console.error("Product save failed", error);
        const errMsg = error instanceof Error ? error.message : typeof error === "object" ? JSON.stringify(error) : String(error);
        toast.error(errMsg.length > 200 ? `${errMsg.slice(0, 200)}...` : errMsg || "Failed to save product");
        throw error;
      }
    },
    (submitErrors) => {
      const messages = collectErrorMessages(submitErrors);
      toast.error(messages[0] ?? "Please fix the highlighted fields before saving.");
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-h-[92vh] max-w-5xl overflow-visible p-0 sm:rounded-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-[92vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "border-b px-6 py-6 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-2xl", children: product ? "Edit product" : "Create product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: isPublished ? "default" : "secondary", children: isPublished ? "Published" : "Draft" }),
        isFeatured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Featured" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Build a complete CMS record with content sections, styles, materials, features, gallery images, and SEO settings." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        SectionCard,
        {
          title: "Basic information",
          description: "Title, slug, category, and publishing state.",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "title", children: "Product title" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "title", placeholder: "Luxury Magnetic Gift Box", ...register("title") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorText, { children: errors.title?.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "slug", children: "Slug" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "slug", placeholder: "luxury-magnetic-gift-box", ...register("slug") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorText, { children: errors.slug?.message })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "category_id", children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "category_id",
                    className: "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm",
                    ...register("category_id"),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a category" }),
                      categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: category.id, children: category.name }, category.id))
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorText, { children: errors.category_id?.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "short_description", children: "Short description" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "short_description", rows: 4, placeholder: "A compact summary used on cards and the hero.", ...register("short_description") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorText, { children: errors.short_description?.message })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between rounded-2xl border bg-surface/60 p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Featured product" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted", children: "Show this product in curated placements." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: isFeatured, onCheckedChange: (checked) => setValue("is_featured", checked) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between rounded-2xl border bg-surface/60 p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Published" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted", children: "Visible on the storefront once enabled." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: isPublished, onCheckedChange: (checked) => setValue("is_published", checked) })
                  ] })
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionCard,
        {
          title: "Featured image",
          description: "Drag and drop a primary hero image for product cards and the detail page.",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "grid gap-4 rounded-3xl border border-dashed p-6 transition-colors",
                "bg-linear-to-br from-surface to-background"
              ),
              onDragOver: (event) => event.preventDefault(),
              onDrop: async (event) => {
                event.preventDefault();
                const files = event.dataTransfer.files;
                if (!files?.length) return;
                const [url] = await uploadFiles(files);
                if (url) setValue("featured_image", url, { shouldValidate: true });
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      onClick: () => document.getElementById("featured-image-input")?.click(),
                      disabled: uploading,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
                        " Upload image"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", onClick: () => setValue("featured_image", ""), children: "Clear image" }),
                  uploading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin text-primary" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "featured-image-input",
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: async (event) => {
                      const file = event.target.files?.[0];
                      if (!file) return;
                      const [url] = await uploadFiles([file]);
                      if (url) setValue("featured_image", url, { shouldValidate: true });
                      event.target.value = "";
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-[220px_minmax(0,1fr)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border bg-card", children: featuredImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featuredImage, alt: "Featured preview", className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-56 place-items-center bg-muted/40 text-sm text-muted-foreground", children: "No featured image selected" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-ink-muted", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "h-4 w-4" }),
                      " Drag an image into this panel or use the upload button."
                    ] }),
                    uploadProgress > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: uploadProgress }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted", children: "Use a warm, editorial crop. This image appears in the list, hero, and social previews." })
                  ] })
                ] })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        SectionCard,
        {
          title: "Gallery images",
          description: "Multiple images with reorder controls for the product gallery.",
          action: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: async () => {
                const input = document.getElementById("gallery-upload-input");
                input?.click();
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
                " Add images"
              ]
            }
          ) }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "gallery-upload-input",
                type: "file",
                accept: "image/*",
                multiple: true,
                className: "hidden",
                onChange: async (event) => {
                  const files = event.target.files;
                  if (!files?.length) return;
                  const urls = await uploadFiles(files);
                  urls.forEach((url) => galleryImages.append({ image_url: url, alt_text: "" }));
                  event.target.value = "";
                }
              }
            ),
            galleryImages.fields.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center rounded-3xl border border-dashed py-16 text-center text-sm text-muted-foreground", children: "Drop multiple gallery images here or upload them with the button above." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3", children: galleryImages.fields.map((field, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                layout: true,
                className: "overflow-hidden rounded-3xl border bg-card shadow-soft",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-4/3 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: watch(`gallery_images.${index}.image_url`) || "",
                      alt: "Gallery preview",
                      className: "h-full w-full object-cover"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        placeholder: "Alt text",
                        ...register(`gallery_images.${index}.alt_text`)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ReorderControls,
                        {
                          onUp: () => index > 0 && galleryImages.move(index, index - 1),
                          onDown: () => index < galleryImages.fields.length - 1 && galleryImages.move(index, index + 1),
                          onRemove: () => galleryImages.remove(index),
                          disableUp: index === 0,
                          disableDown: index === galleryImages.fields.length - 1
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => setValue("featured_image", watch(`gallery_images.${index}.image_url`)), children: "Use as hero" })
                    ] })
                  ] })
                ]
              },
              field.id
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion, { type: "multiple", defaultValue: ["content", "styles", "seo"], className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "content", className: "rounded-3xl border bg-card px-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-5 text-left hover:no-underline", children: "Content sections" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            contentSections.fields.map((field, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-surface/60 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                  "Section ",
                  index + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ReorderControls,
                  {
                    onUp: () => index > 0 && contentSections.move(index, index - 1),
                    onDown: () => index < contentSections.fields.length - 1 && contentSections.move(index, index + 1),
                    onRemove: () => contentSections.remove(index),
                    disableUp: index === 0,
                    disableDown: index === contentSections.fields.length - 1
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Heading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register(`content_sections.${index}.heading`) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Content" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 5, ...register(`content_sections.${index}.content`) })
                ] })
              ] })
            ] }, field.id)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => contentSections.append({ heading: "New section", content: "Describe the section in a concise, readable way." }),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
                  " Add section"
                ]
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "styles", className: "rounded-3xl border bg-card px-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-5 text-left hover:no-underline", children: "Box styles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            boxStyles.fields.map((field, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-surface/60 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                  "Style ",
                  index + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ReorderControls,
                  {
                    onUp: () => index > 0 && boxStyles.move(index, index - 1),
                    onDown: () => index < boxStyles.fields.length - 1 && boxStyles.move(index, index + 1),
                    onRemove: () => boxStyles.remove(index),
                    disableUp: index === 0,
                    disableDown: index === boxStyles.fields.length - 1
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register(`box_styles.${index}.title`) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, ...register(`box_styles.${index}.description`) })
                ] })
              ] })
            ] }, field.id)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", onClick: () => boxStyles.append({ title: "New style", description: "Explain the shape, closure, or premium detail." }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
              " Add style"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "materials", className: "rounded-3xl border bg-card px-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-5 text-left hover:no-underline", children: "Materials" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            materials.fields.map((field, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-surface/60 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                  "Material ",
                  index + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ReorderControls,
                  {
                    onUp: () => index > 0 && materials.move(index, index - 1),
                    onDown: () => index < materials.fields.length - 1 && materials.move(index, index + 1),
                    onRemove: () => materials.remove(index),
                    disableUp: index === 0,
                    disableDown: index === materials.fields.length - 1
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Material title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register(`materials.${index}.title`) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Material description" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, ...register(`materials.${index}.description`) })
                ] })
              ] })
            ] }, field.id)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", onClick: () => materials.append({ title: "New material", description: "Explain the stock or finish in one concise paragraph." }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
              " Add material"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "features", className: "rounded-3xl border bg-card px-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-5 text-left hover:no-underline", children: "Features" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            features.fields.map((field, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-2xl border bg-surface/60 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: index + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register(`features.${index}.feature`), placeholder: "Feature label" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", onClick: () => features.remove(index), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
            ] }, field.id)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", onClick: () => features.append({ feature: "New feature" }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
              " Add feature"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "seo", className: "rounded-3xl border bg-card px-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-5 text-left hover:no-underline", children: "SEO & meta tags" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Meta title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register("meta_title"), placeholder: "Custom packaging boxes for modern brands" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Meta description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, ...register("meta_description"), placeholder: "Concise meta description for search and social previews." })
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "sticky bottom-0 border-t bg-background/95 px-0 py-4 backdrop-blur-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => onOpenChange(false), disabled: isSubmitting || uploading, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "bg-gradient-accent border-0 shadow-soft hover:shadow-glow", disabled: isSubmitting || uploading, children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          " Saving..."
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
          " Save product"
        ] }) })
      ] })
    ] }) })
  ] }) }) });
}
function slugify(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function AdminPanel() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [ready, setReady] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [categoryFilter, setCategoryFilter] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [page, setPage] = reactExports.useState(1);
  const [editorOpen, setEditorOpen] = reactExports.useState(false);
  const [editorProductId, setEditorProductId] = reactExports.useState(null);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [categoryName, setCategoryName] = reactExports.useState("");
  const deferredSearch = reactExports.useDeferredValue(search);
  const fetchProducts = useServerFn(listCmsProducts);
  const fetchCategories = useServerFn(listCmsCategories);
  const createCategory = useServerFn(createCmsCategory);
  const deleteProduct = useServerFn(deleteCmsProduct);
  reactExports.useEffect(() => {
    let mounted = true;
    getAdminSession().then((session) => {
      if (!mounted) return;
      if (!session) {
        navigate({
          to: "/admin/login"
        });
        return;
      }
      setReady(true);
    }).catch(() => {
      if (mounted) navigate({
        to: "/admin/login"
      });
    });
    return () => {
      mounted = false;
    };
  }, [navigate]);
  const {
    data: products = [],
    isLoading: productsLoading
  } = useQuery({
    queryKey: ["admin", "products"],
    queryFn: () => fetchProducts(),
    enabled: ready
  });
  const {
    data: categories = [],
    isLoading: categoriesLoading
  } = useQuery({
    queryKey: ["admin", "categories"],
    queryFn: () => fetchCategories(),
    enabled: ready
  });
  const editorProduct = reactExports.useMemo(() => products.find((product) => product.id === editorProductId) ?? null, [editorProductId, products]);
  const metrics = reactExports.useMemo(() => {
    const published = products.filter((product) => product.is_published).length;
    const featured = products.filter((product) => product.is_featured).length;
    const drafts = products.length - published;
    return {
      total: products.length,
      published,
      featured,
      drafts
    };
  }, [products]);
  const filteredProducts = reactExports.useMemo(() => {
    const searchTerm = deferredSearch.trim().toLowerCase();
    return products.filter((product) => {
      const matchesSearch = !searchTerm || [product.title, product.slug, product.short_description, product.category?.name, product.category?.slug].filter(Boolean).some((value) => String(value).toLowerCase().includes(searchTerm));
      const matchesCategory = categoryFilter === "all" || product.category_id === categoryFilter;
      const matchesStatus = statusFilter === "all" || statusFilter === "published" && product.is_published || statusFilter === "draft" && !product.is_published || statusFilter === "featured" && product.is_featured;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [categoryFilter, deferredSearch, products, statusFilter]);
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  reactExports.useEffect(() => {
    setPage(1);
  }, [categoryFilter, deferredSearch, statusFilter]);
  if (!ready) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-linear-to-b from-background via-background to-surface/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-30 border-b bg-background/85 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight flex items-center justify-between gap-4 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BreadcrumbList, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "PackifyBoxes" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbSeparator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbPage, { children: "Admin" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-3xl sm:text-4xl", children: "Product CMS" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: async () => {
        await signOutAdmin();
        navigate({
          to: "/admin/login"
        });
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
        " Sign out"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container-tight space-y-8 py-8 md:py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-end justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: "Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-ink-muted", children: "Manage products and categories from a single product-focused workspace." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { title: "Total products", value: metrics.total, icon: Package, note: "All CMS product records" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { title: "Published", value: metrics.published, icon: CircleCheck, note: "Visible on the storefront" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { title: "Featured", value: metrics.featured, icon: ShieldCheck, note: "Curated product highlights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { title: "Drafts", value: metrics.drafts, icon: ChartColumn, note: "Hidden until published" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Products", description: "Search, filter, edit, publish, and delete products.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-gradient-accent border-0 shadow-soft hover:shadow-glow", onClick: () => {
          setEditorProductId(null);
          setEditorOpen(true);
        }, children: "Add product" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 rounded-3xl border bg-card p-4 shadow-soft lg:grid-cols-[1.4fr_0.8fr_0.8fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: search, onChange: (event) => setSearch(event.target.value), placeholder: "Search products, slugs, descriptions...", className: "pl-9" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: categoryFilter, onValueChange: setCategoryFilter, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Filter by category" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All categories" }),
              categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: category.id, children: category.name }, category.id))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: statusFilter, onValueChange: setStatusFilter, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Filter by status" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "published", children: "Published" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "draft", children: "Draft" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "featured", children: "Featured" })
            ] })
          ] })
        ] }),
        productsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: Array.from({
          length: 6
        }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-105 rounded-3xl" }, index)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:hidden", children: pageItems.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl border bg-card shadow-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-4/3 overflow-hidden bg-muted", children: product.featured_image || product.category?.image_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.featured_image || product.category?.image_url || "", alt: product.title, className: "h-full w-full object-cover" }) : null }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: product.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: product.category?.name ?? "Unassigned" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-end gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: product.is_published ? "default" : "secondary", children: product.is_published ? "Live" : "Draft" }),
                  product.is_featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Featured" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted", children: product.short_description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => {
                  setEditorProductId(product.id);
                  setEditorOpen(true);
                }, children: "Edit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", onClick: () => setDeleteTarget(product.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
              ] })
            ] })
          ] }, product.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden overflow-hidden rounded-3xl border bg-card shadow-soft md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Product" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Flags" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Created" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: pageItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 6, className: "py-14 text-center text-muted-foreground", children: "No products found." }) }) : pageItems.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-20 overflow-hidden rounded-2xl border bg-muted", children: product.featured_image || product.category?.image_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.featured_image || product.category?.image_url || "", alt: product.title, className: "h-full w-full object-cover" }) : null }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: product.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-85 text-xs text-muted-foreground", children: product.short_description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] uppercase tracking-[0.3em] text-primary", children: product.slug })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: product.category?.name ?? "Unassigned" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: product.is_published ? "default" : "secondary", children: product.is_published ? "Published" : "Draft" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "flex flex-wrap gap-2", children: product.is_featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Featured" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-muted-foreground", children: new Date(product.created_at).toLocaleDateString() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => {
                  setEditorProductId(product.id);
                  setEditorOpen(true);
                }, children: "Edit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", onClick: () => setDeleteTarget(product.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
              ] }) })
            ] }, product.id)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-3xl border bg-card p-4 shadow-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              "Showing ",
              pageItems.length,
              " of ",
              filteredProducts.length,
              " products"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setPage((value) => Math.max(1, value - 1)), disabled: currentPage === 1, children: "Previous" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                "Page ",
                currentPage,
                " of ",
                totalPages
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setPage((value) => Math.min(totalPages, value + 1)), disabled: currentPage === totalPages, children: "Next" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-5 pb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Categories", description: "Create categories here and they will immediately appear in the product category dropdown." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-[380px_minmax(0,1fr)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-card p-5 shadow-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: "Create category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-muted", children: "Keep category creation close to product setup so the CMS stays tidy." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: categoryName, onChange: (event) => setCategoryName(event.target.value), placeholder: "Category name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: slugify(categoryName), readOnly: true, placeholder: "Auto-generated slug", className: "bg-muted/50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full bg-gradient-accent border-0 shadow-soft hover:shadow-glow", onClick: async () => {
                const name = categoryName.trim();
                const slug = slugify(name);
                if (!name || !slug) {
                  toast.error("Category name is required");
                  return;
                }
                try {
                  await createCategory({
                    data: {
                      name,
                      slug,
                      description: null
                    }
                  });
                  toast.success("Category created");
                  setCategoryName("");
                  await qc.invalidateQueries({
                    queryKey: ["admin", "categories"]
                  });
                } catch (error) {
                  toast.error(error instanceof Error ? error.message : "Failed to create category");
                }
              }, children: "Create category" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: categoriesLoading ? Array.from({
            length: 3
          }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 rounded-3xl" }, index)) : categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-card p-5 shadow-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-2 font-display text-2xl", children: category.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-muted", children: category.description ?? "Premium packaging category." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                products.filter((product) => product.category_id === category.id).length,
                " products"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-4 w-4" }),
              " ",
              category.slug
            ] })
          ] }, category.id)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductEditorDialog, { open: editorOpen, onOpenChange: (open) => {
      setEditorOpen(open);
      if (!open) setEditorProductId(null);
    }, product: editorProduct, categories, onSaved: async () => {
      await qc.invalidateQueries({
        queryKey: ["admin", "products"]
      });
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: deleteTarget !== null, onOpenChange: (open) => !open && setDeleteTarget(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Delete product?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "This removes the product and all related content sections, styles, materials, features, and gallery images." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setDeleteTarget(null), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "destructive", onClick: async () => {
          if (!deleteTarget) return;
          try {
            await deleteProduct({
              data: deleteTarget
            });
            toast.success("Product deleted");
            setDeleteTarget(null);
            await qc.invalidateQueries({
              queryKey: ["admin", "products"]
            });
          } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to delete product");
          }
        }, children: "Delete product" })
      ] })
    ] }) })
  ] });
}
function MetricCard({
  title,
  value,
  note,
  icon: Icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: {
    y: -4
  }, transition: {
    duration: 0.25
  }, className: "rounded-3xl border bg-card p-5 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-4xl", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-muted", children: note })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-primary/10 p-3 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) })
  ] }) });
}
function SectionHeader({
  title,
  description,
  actions
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: "CMS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-ink-muted", children: description })
    ] }),
    actions
  ] });
}
export {
  AdminPanel as component
};
