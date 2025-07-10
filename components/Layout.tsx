import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import Menu from './Menu';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default function Layout({ children, title = "Title" }: LayoutProps) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <View style={{ flex: 1 }}>
            <Header title={title} onMenuToggle={setIsMenuOpen} />
            <Menu isOpen={isMenuOpen} />
            {children}
        </View>
    );
}