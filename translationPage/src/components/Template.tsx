import { useState } from "react";
import { useTranslation } from "react-i18next";
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel } from '@headlessui/react';
import { navigation } from "../data/navigation";
import { motion } from 'framer-motion';

import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { t, i18n } = useTranslation("global");

    return (
        <div className="min-h-screen flex flex-col">
            {/*Header*/}
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Babel Int</span>
                            <img
                                alt="Logo Babel Int"
                                src="/images/logoBabel.png"
                                className="h-10 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <motion.div
                                animate={{ rotate: mobileMenuOpen ? 45 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Bars3Icon aria-hidden="true" className="size-6" />
                            </motion.div>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation().map((item) => (
                            <button
                                key={item.id}
                                className="block text-sm/6 font-semibold text-gray-900 cursor-pointer text-center"
                                onClick={() => {
                                    if (item.id === 7) {
                                        i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
                                    }
                                }}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </nav>


                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50 " />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto rounded-l-2xl bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/50 ">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Babel Int</span>
                                <img
                                    alt=""
                                    src="/images/logoBabel.png"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="mt-6 flow-root"
                        >
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation().map((item) => (
                                        <button
                                            key={item.id}
                                            className="block text-sm/6 font-semibold text-gray-900 cursor-pointer"
                                            onClick={() => {
                                                if (item.id === 7) {
                                                    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
                                                }
                                            }}
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </DialogPanel>
                </Dialog>
            </header>



            {/*Main*/}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
            <main className="flex-grow p-4">
                {children}
            </main>




            {/*Footer*/}
            <footer className="bg-gray-900 text-white p-4">
                <img
                    alt="Logo Babel Int"
                    src="/images/logoBabelBlanco.png"
                    className="h-10 w-auto flex mx-auto"
                />
                <br />
                <div className="grid grid-cols-3 gap-4 place-items-center">
                    <div className="font-bold underline decoration-2">{t("footer.Contact_us")}</div>
                    <div className="font-bold decoration-1">Email</div>
                    <div className="font-bold">{t("footer.Social_Media")}</div>

                    <div className="font-semibold">+52 (55) 5604 9357</div>
                    <a className="font-semibold cursor-pointer" href="mailto:quotes@babelint.com">quotes@babelint.com</a>
                    <button className="font-semibold cursor-pointer">Facebook</button>

                    <div className="font-semibold">+52 (55) 5604 9088</div>
                    <div className="font-semibold"></div>
                    <button className="font-semibold cursor-pointer">Instagram</button>
                </div>
            </footer>
        </div>
    );
}
