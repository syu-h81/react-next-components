type AvatorNameProps = {
  size?: 'small' | 'medium' | 'large';
  name: string;
  color?: 'blue' | 'purple' | 'pink';
};

const sizeClasses = {
  small: 'h-12 w-12 text-xs',
  medium: 'h-14 w-14 text-sm',
  large: 'h-16 w-16 text-lg',
};

const colorClasses = {
  blue: 'bg-avator-small',
  purple: 'bg-avator-medium',
  pink: 'bg-avator-large',
};

export function AvatorName({ size = 'medium', name = '', color = 'purple' }: AvatorNameProps) {
  return (
    <span className={`flex items-center justify-center rounded-full font-bold tracking-wide ${colorClasses[color]} ${sizeClasses[size]}`}>
      { name }
    </span>
  )
}