import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";

const classes = cva("flex gap-2 cursor-pointer text-sm", {
  variants: {
    variant: {
      primary:
        "bg-primary hover:bg-foreground transition-colors text-white font-semibold",
      secondary: "border border-foreground rounded-md font-medium",
    },
    size: {
      small: "px-4 py-2",
      medium: "px-6 py-3",
      large: "px-8 py-4",
    },
  },
});

type ButtonProps<C extends ElementType> = VariantProps<typeof classes> & {
  as?: C;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<C>;

const Button = <C extends ElementType>(props: ButtonProps<C>) => {
  const { as, children, size, variant, className, ...rest } = props;
  const Component = as || "button";

  return (
    <Component className={classes({ size, variant, className })} {...rest}>
      {children}
    </Component>
  );
};

export default Button;
