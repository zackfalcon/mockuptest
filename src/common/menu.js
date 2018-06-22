import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: 'DEALFLOW',
    icon: 'appstore',
    path: 'dashboard',
    children: [
      {
        name: 'DEALFLOW Saclay',
        path: 'workplace',
      },
      {
        name: 'DEALFLOW Seed',
        path: '',
      },
      {
        name: 'DEALFLOW Venture',
        path: '',
      },
      {
        name: 'DEALFLOW Growth',
        path: '',
      },
      {
        name: 'DEALFLOW Africa',
        path: '',
      },
    ],
  },
  {
    name: 'FUNDRAISING',
    icon: 'flag',
    path: 'dashboard',
    children: [
      {
        name: 'FUNDRAISING PEF III',
        path: '',
      },
      {
        name: 'FUNDRAISING PIV VII',
        path: '',
      },
    ],
  },
  {
    name: 'DIRECTORY',
    icon: 'contacts',
    path: 'dashboard',
    children: [
      {
        name: 'Partech',
        path: '',
      },
      {
        name: 'Partech Portfolio',
        path: '',
      },
      {
        name: 'Partech Investors',
        path: '',
      },
      {
        name: 'Founders',
        path: '',
      },
      {
        name: 'Corporates',
        path: '',
      },
      {
        name: 'VC/PE Firms',
        path: '',
      },
      {
        name: 'Incantentors/Accelerators',
        path: '',
      },
      {
        name: 'Service Providers',
        path: '',
      },
    ],
  },
  {
    name: 'EVENTS',
    icon: 'calendar',
    path: 'dashboard',
    children: [
      {
        name: 'Events Paris',
        path: '',
      },
      {
        name: 'Events France',
        path: '',
        authority: 'admin',
      },
      {
        name: 'Events Europe',
        path: '',
        authority: 'admin',
      },
    ],
  },
  {
    name: 'LIBRARY',
    icon: 'book',
    path: 'dashboard',
    children: [
      {
        name: 'Startups',
        path: '',
      },
      {
        name: 'Resources',
        path: '',
      },
    ],
  },
 
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
