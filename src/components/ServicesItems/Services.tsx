"use client";

import { useState, useRef } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import styles from '@components/Navbar/Navbar.module.css';

export default function Services() {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current); // Clear any pending close timeout
        }
        setIsOpen(true); // Ensure the dropdown opens
    };
    
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false); // Close the dropdown after a delay
        }, 200); // Adjust delay time here
    };

    return (
        <Menu as="div" className="relative inline-block text-left">

            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Services Menu Button */}
                <MenuButton className={`${styles.navLink} ${
                                    window.location.pathname === "/" ? styles.active : ""
                            }`}>
                    Services
                </MenuButton>

                {/* Dropdown Menu */}
                {isOpen && (
                    <MenuItems
                        className="absolute mt-2 w-48 bg-white shadow-lg rounded-md"
                        onMouseEnter={handleMouseEnter} // Prevent closing when hovering over the menu
                        onMouseLeave={handleMouseLeave} // Allow closing when leaving the menu
                    >
                        <MenuItem as="a" href="/services/hardwood">
                            {({ focus }) => (
                                <div
                                    className={`block px-4 py-2 text-sm ${
                                        focus ? 'bg-green-100 text-green-700' : 'text-gray-900'
                                    }`}
                                >
                                    Hardwood flooring
                                </div>
                            )}
                        </MenuItem>
                        
                        <MenuItem as="a" href="/services/vinyl">
                            {({ focus }) => (
                                <div
                                    className={`block px-4 py-2 text-sm ${
                                        focus ? 'bg-green-100 text-green-700' : 'text-gray-900'
                                    }`}
                                >
                                    Luxury vinyl plank (LVP) and tile (LVT)
                                </div>
                            )}
                        </MenuItem>
                        <MenuItem as="a" href="/services/laminate">
                            {({ focus }) => (
                                <div
                                    className={`block px-4 py-2 text-sm ${
                                        focus ? 'bg-green-100 text-green-700' : 'text-gray-900'
                                    }`}
                                >
                                    Laminate flooring solutions
                                </div>
                            )}
                        </MenuItem>
                        <MenuItem as="a" href="/services/tiling">
                            {({ focus }) => (
                                <div
                                    className={`block px-4 py-2 text-sm ${
                                        focus ? 'bg-green-100 text-green-700' : 'text-gray-900'
                                    }`}
                                >
                                    Ceramic and porcelain tile
                                </div>
                            )}
                        </MenuItem>
                        <MenuItem as="a" href="/services/stone">
                            {({ focus }) => (
                                <div
                                    className={`block px-4 py-2 text-sm ${
                                        focus ? 'bg-green-100 text-green-700' : 'text-gray-900'
                                    }`}
                                >
                                    Natural stone installations
                                </div>
                            )}
                        </MenuItem>
                        <MenuItem as="a" href="/services/carpet">
                            {({ focus }) => (
                                <div
                                    className={`block px-4 py-2 text-sm ${
                                        focus ? 'bg-green-100 text-green-700' : 'text-gray-900'
                                    }`}
                                >
                                    Carpet installation
                                </div>
                            )}
                        </MenuItem>
                    </MenuItems>
                )}
            </div>
        </Menu>
    );
}
