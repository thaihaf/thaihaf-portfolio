import { BriefcaseBusiness, Facebook, House, Instagram, Linkedin, Rocket, Twitter, UserRound } from "lucide-react";

export const ANIMATION_SECTION = {
	duration: 0.35,
	delay: 0.2,
	initial: { opacity: 0, y: -20 },
	animate: { opacity: 1, y: 0 },
};

export const HEADER_ITEMS = [
	{ label: "Home", value: 0, href: "/", icon: House },
	{ label: "About", value: 1, href: "/about", icon: UserRound },
	{ label: "Works", value: 2, href: "/works", icon: BriefcaseBusiness },
	{ label: "Contact", value: 3, href: "/contact", icon: Rocket },
]

export const FOOTER_LINKS_STATUS = {
	SOON: "soon",
	DONE: "done"
}
export const FOOTER_PAGE_LINKS = [
	{ label: "Home", href: "/", status: FOOTER_LINKS_STATUS.DONE },
	{ label: "About me", href: "/", status: FOOTER_LINKS_STATUS.DONE },
	{ label: "My works", href: "/", status: FOOTER_LINKS_STATUS.DONE },
	{ label: "Newletter", href: "/", status: FOOTER_LINKS_STATUS.SOON },
]
export const FOOTER_SOCIALS = [
	{ label: "X.com", href: "/", status: FOOTER_LINKS_STATUS.DONE, icon: Twitter },
	{ label: "Instagram", href: "/", status: FOOTER_LINKS_STATUS.DONE, icon: Linkedin },
	{ label: "Linkedin", href: "/", status: FOOTER_LINKS_STATUS.DONE, icon: Instagram },
	{ label: "Dribble", href: "/", status: FOOTER_LINKS_STATUS.DONE, icon: Facebook },
]