'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="w-[195px] h-[1006px] bg-[#F7F4F4] flex flex-col justify-between rounded-xl items-center">
            <div>
                {/* Logo */}
                <div className="flex justify-center py-6">
                    <Link href="/admin/overview">
                        <Image src="/KONNECTU  4.png" alt="KonnectU Logo" width={120} height={50} priority />
                    </Link>
                </div>

                {/* Main Navigation */}
                <nav className="flex flex-col gap-3 px-2 w-[173px] whitespace-nowrap">
                    <SidebarItem
                        icon={
                            <Image
                                src="/Dashboard.png"
                                alt="Dashboard Icon"
                                width={14}
                                height={14}
                            />
                        }
                        label="Dashboard"
                        active
                    />
                    <SidebarItem
                        icon=
                        {<Image
                            src="/Analytics.png"
                            alt="Dashboard Icon"
                            width={14}
                            height={14}
                        />} label="Analytic & Report" />

                    <SidebarItem
                        icon=
                        {<Image
                            src="/Account.png"
                            alt="Dashboard Icon"
                            width={14}
                            height={14}
                        />} label="Account manage..." />

                    {/* Sub-items */}
                    <div className="ml-6 text-[#678D58] space-y-2 mt-1">
                        <SubItem
                            icon={
                                <Image
                                    src="/Button.png"
                                    alt="Client Icon"
                                    width={12}
                                    height={12}
                                />
                            }
                            label="Clients"
                        />

                        <SubItem
                            icon={
                                <Image
                                    src="/Button.png"
                                    alt="Artisan Icon"
                                    width={12}
                                    height={12}
                                />
                            }
                            label="Artisans"
                        />

                        <SubItem
                            icon={
                                <Image
                                    src="/Button.png"
                                    alt="Professional Icon"
                                    width={12}
                                    height={12}
                                />
                            }
                            label="Professionals"
                        />

                    </div>

                    <SidebarItem
                        icon=
                        {<Image
                            src="/Message.png"
                            alt="Dashboard Icon"
                            width={14}
                            height={14}
                        />} label="Message" />

                    <SidebarItem
                        icon=
                        {<Image
                            src="/Job.png"
                            alt="Dashboard Icon"
                            width={14}
                            height={14}
                        />} label="Job oversight" />
                </nav>
            </div>

            {/* Footer Navigation */}
            <nav className="flex flex-col gap-3 px-4 pb-4 w-[173px]">
                <SidebarItem
                    icon=
                    {<Image
                        src="/Settings.png"
                        alt="Dashboard Icon"
                        width={14}
                        height={14}
                    />} label="Settings" />
                <SidebarItem
                    icon=
                    {<Image
                        src="/Job.png"
                        alt="Dashboard Icon"
                        width={14}
                        height={14}
                    />} label="Logout" />
            </nav>
        </aside>
    );
}

// Sidebar item component
function SidebarItem({
    icon,
    label,
    active = false,
}: {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}) {
    return (
        <button
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-md border text-[13px] font-medium transition justify-center ${active
                ? 'bg-[#107C10] text-white border-transparent'
                : 'border-green-700 text-green-700 hover:bg-green-100'
                }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}

// Sub-item (for indented children)
function SubItem({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
      <div className="flex items-center gap-2 text-sm">
        {icon}
        <span className="text-green-700">{label}</span>
      </div>
    );
  }  
