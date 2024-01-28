import React from 'react';
import AnalyticsIcon from '../../assets/icons/AnalyticsIcon';
import BoxIcon from '../../assets/icons/BoxIcon';
import BellIcon from '../../assets/icons/BellIcon';
import ClokIcon from '../../assets/icons/ClokIcon';
import FileIcon from '../../assets/icons/FileIcon';
import PlusIcon from '../../assets/icons/PlusIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import StockIcon from '../../assets/icons/StockIcon';
import SupportsIcon from '../../assets/icons/SupportsIcon';
import TruckIcon from '../../assets/icons/TruckIcon';
import UserIcon from '../../assets/icons/UserIcon';
import UsersIcon from '../../assets/icons/UsersIcon';
import WalletIcon from '../../assets/icons/WalletIcon';

export const PlusIcons = [
    {
        title: "Создать заказ",
        icon: <PlusIcon />,
        link: "/create",
    },
]

export const sideMainItemList = [
    {
        title: "Аналитика",
        icon: <AnalyticsIcon />,
        link: "/analytics",
    },
    {
        title: "Автопарк",
        icon: <StockIcon />,
        link: "/cars",
    },
    {
        title: "Поддержка",
        icon: <SupportsIcon />,
        link: "/support",
    },
    {
        title: "Водители",
        icon: <UsersIcon />,
        link: "/drivers",
    },
]

export const sideTopItemList = [
    {
        title: "Поиск заказов",
        icon: <SearchIcon />,
        link: "/search-orders",
    },
    {
        title: "Активные заказы",
        icon: <BoxIcon />,
        link: "/active-orders",
    },
    {
        title: "Заказы в работе",
        icon: <TruckIcon />,
        link: "/orders-progress",
    },
    {
        title: "История заказов",
        icon: <ClokIcon />,
        link: "/history",
    },
    {
        title: "Черновики",
        icon: <FileIcon />,
        link: "/drafts",
    },
]

export const sideButItemList = [
    {
        title: "Уведомление",
        icon: <BellIcon />,
        link: "/notice",
    },
    {
        title: "450 000",
        icon: <WalletIcon />,
        link: "/wallet",
    },
    {
        title: "ТОО GORILLA ASIA",
        icon: <UserIcon />,
        link: "/profile",
    },
]
