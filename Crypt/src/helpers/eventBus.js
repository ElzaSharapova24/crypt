import { useEventBus } from "@vueuse/core";

const createAccountBus = useEventBus("createAccount");

async function createAccount() {
    await createAccountBus.emit();
}

const reloadAccountPageBus = useEventBus("reloadAccountPage");

async function reloadAccountPage() {
    await reloadAccountPageBus.emit();
}

const reloadCurrencyPageBus = useEventBus("reloadCurrencyPage");

async function reloadCurrencyPage() {
    await reloadCurrencyPageBus.emit();
}

export {
    createAccountBus,
    createAccount,
    reloadAccountPageBus,
    reloadAccountPage,
    reloadCurrencyPageBus,
    reloadCurrencyPage,
};
