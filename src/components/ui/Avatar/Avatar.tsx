import { AvatorName } from './AvatarName';
import { AvatarIcon } from './avatarIcon';

export function Avatar() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <AvatorName size="small" color="blue" name="TY" />
        <AvatorName size="medium" color="purple" name="SK" />
        <AvatorName size="large" color="pink" name="MH" />
      </div>
      <div className="flex items-center gap-2">
        <AvatarIcon src="/images/avatar-icon-1.png" alt="TY" width={50} height={50} name="TY" />
        <AvatarIcon src="/images/avatar-icon-2.png" alt="SK" width={50} height={50} name="SK" />
        <AvatarIcon src="/images/avatar-icon-3.png" alt="MH" width={50} height={50} name="MH" />
      </div>
    </div>
  );
}

