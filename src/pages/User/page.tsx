import { observer } from 'mobx-react-lite';

import { usePageTitle } from '@/shared/hooks';

const User = observer(() => {
  usePageTitle('User');

  return <div>User</div>;
});

export default User;
