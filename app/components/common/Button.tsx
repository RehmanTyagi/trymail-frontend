import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";

const classes = cva("flex gap-2 items-center", {
  variants: {
    variant: {
      primary:
        "bg-primary hover:bg-foreground transition-colors text-white font-semibold",
      secondary: "border border-black font-medium",
    },
    size: {
      small: "px-5 text-xs py-2.5",
      medium: "px-6 text-sm py-3",
      large: "px-8 text-base py-4",
    },
  },
});

type ButtonProps<C extends ElementType> = VariantProps<typeof classes> &
  ComponentPropsWithoutRef<C> & {
    as?: C;
    children: React.ReactNode;
  };

const Button = <C extends ElementType = "button">(props: ButtonProps<C>) => {
  const { as, children, size, variant, className, ...rest } = props;
  const Component = as || "button";

  return (
    <Component className={classes({ size, variant, className })} {...rest}>
      {children}
    </Component>
  );
};

export default Button;
