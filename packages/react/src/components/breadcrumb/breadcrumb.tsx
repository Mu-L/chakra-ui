"use client"

import {
  type HTMLChakraProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"
import { ChevronRightIcon, EllpsisIcon } from "../icons"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useBreadcrumbStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "breadcrumb" })

export { useBreadcrumbStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface BreadcrumbRootBaseProps
  extends SlotRecipeProps<"breadcrumb">,
    UnstyledProp {}

export interface BreadcrumbRootProps
  extends HTMLChakraProps<"nav", BreadcrumbRootBaseProps> {}

export const BreadcrumbRoot = withProvider<HTMLElement, BreadcrumbRootProps>(
  "nav",
  "root",
  {
    defaultProps: { "aria-label": "breadcrumb" },
  },
)

export const BreadcrumbPropsProvider =
  PropsProvider as React.Provider<BreadcrumbRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface BreadcrumbListProps
  extends HTMLChakraProps<"ol">,
    UnstyledProp {}

export const BreadcrumbList = withContext<HTMLElement, BreadcrumbListProps>(
  "ol",
  "list",
)

////////////////////////////////////////////////////////////////////////////////////

export interface BreadcrumbItemProps
  extends HTMLChakraProps<"li">,
    UnstyledProp {}

export const BreadcrumbItem = withContext<HTMLElement, BreadcrumbItemProps>(
  "li",
  "item",
)

////////////////////////////////////////////////////////////////////////////////////

export interface BreadcrumbLinkProps
  extends HTMLChakraProps<"a">,
    UnstyledProp {}

export const BreadcrumbLink = withContext<
  HTMLAnchorElement,
  BreadcrumbLinkProps
>("a", "link")

////////////////////////////////////////////////////////////////////////////////////

export interface BreadcrumbCurrentLinkProps
  extends HTMLChakraProps<"span">,
    UnstyledProp {}

export const BreadcrumbCurrentLink = withContext<
  HTMLElement,
  BreadcrumbCurrentLinkProps
>("span", "currentLink", {
  defaultProps: {
    role: "link",
    "aria-current": "page",
  },
})

////////////////////////////////////////////////////////////////////////////////////

export interface BreadcrumbSeparatorProps
  extends HTMLChakraProps<"li">,
    UnstyledProp {}

export const BreadcrumbSeparator = withContext<
  HTMLElement,
  BreadcrumbSeparatorProps
>("li", "separator", {
  defaultProps: {
    "aria-hidden": true,
    children: <ChevronRightIcon />,
  },
})

////////////////////////////////////////////////////////////////////////////////////

export interface BreadcrumbEllipsisProps
  extends HTMLChakraProps<"span">,
    UnstyledProp {}

export const BreadcrumbEllipsis = withContext<
  HTMLElement,
  BreadcrumbEllipsisProps
>("li", "ellipsis", {
  defaultProps: {
    role: "presentation",
    "aria-hidden": true,
    children: <EllpsisIcon />,
  },
})
