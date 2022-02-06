import classNames from 'classnames';
import c from './Button.module.scss';

const Button = ({ title, children, type, ...props }) => {
  const getClasses = (type = '') => {
    switch (type) {
      case 'add':
        return classNames(c.button, c.add);
      case 'delete':
        return classNames(c.button, c.delete);

      default:
        return classNames(c.button);
    }
  };
  return (
    <button {...props} className={getClasses(type)}>
      {title}
      {children}
    </button>
  );
};

export default Button;
