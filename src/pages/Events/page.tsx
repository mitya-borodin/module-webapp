import { observer } from 'mobx-react-lite';

import { usePageTitle } from '@/shared/hooks';

const Events = observer(() => {
  usePageTitle('Events');

  return <div>Events</div>;
});

export default Events;
