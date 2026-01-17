import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-forest hover:bg-forest-dark text-white',
  secondary: 'bg-white hover:bg-sand-light text-forest border-2 border-forest',
  outline: 'bg-transparent hover:bg-forest/10 text-forest border-2 border-forest',
  ghost: 'bg-transparent hover:bg-charcoal/5 text-charcoal',
  white: 'bg-white hover:bg-sand-light text-forest',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  ...props
}) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
