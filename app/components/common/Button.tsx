import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const classes = cva("flex gap-2 cursor-pointer text-sm", {
  variants: {
    variant: {
      primary: "bg-primary",
      secondary: "border border-foreground rounded-md",
    },
    size: {
      small: "px-4 py-2",
      medium: "px-6 py-3",
      large: "px-8 py-4",
    },
  },
});

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

const Button = (props: ButtonProps) => {
  const { variant, size, className, ...restProps } = props;

  return (
    <button className={classes({ variant, size, className })} {...restProps} />
  );
};

export default Button;
