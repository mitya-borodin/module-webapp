import { observer } from 'mobx-react-lite';
import type { ReactNode } from 'react';

import { useStore } from '../../store';

import { usePageTitle } from '@/shared/hooks';

import "./page.css";

const Devices = observer(() => {
  usePageTitle('Devices');

  const { hardWareStore } = useStore();

  const renderDevices = () => {
    const devices: ReactNode[] = [];

    hardWareStore.devices.forEach((device) => {
      devices.push(
        <div key={device.id}>
          <span>Device ID: {device.id}</span>
          {device.controls.map((control) => {
            return (
              <div key={`${device.id} - ${control.id}`}>
                <p>Control ID: {control.id}</p>
                <p>Control TYPE: {control.type}</p>
                <p>Control VALUE: {control.value}</p>
              </div>
            );
          })}
        </div>,
      );
    });

    return devices;
  };

  return (
    <div className="devisec-page">  
      <ul className='devisec-list'>{renderDevices().map((device) => <li className='devisec-list__item'>{device}</li>)}</ul>
    </div>
  );
});

export default Devices;
