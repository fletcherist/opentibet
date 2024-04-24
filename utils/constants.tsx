export const LINK_CONTACTS = "contacts";
export const LINK_PHOTO_GALLERY = "photo_gallery";
export const LINK_OFFERS = "offers";
export const LINK_WELCOME_SCREEN = "welcome";
export const LINK_TIBET_PREPARATION = "tibet_preparation";
export const LINK_APPLY_FORM = 'apply_form'

export type Month = 'may' | 'june' | 'july' | 'august' | 'september' | 'october'
export const getTourPriceForMonth = (month: Month): number => {
    const prices: Record<Month, number> = {
        may: 1900,
        june: 2000,
        july: 2100,
        august: 2000,
        september: 2300,
        october: 1900,
    }
    return prices[month] || 0
}