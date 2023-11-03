const SI = {
    "factory:replacer": "",
    "event:dispatcher": "",
    "alias:modifier": "",
    "alias:modifier:strategy": "",
    "alias:modifier:validator": "",
    cache: "",
    "component:black_white_list": "",
    "component:extractor": "",
    "component:extractor:strategy": "",
    "creator:creator": "",
    "creator:fallback": "",
    "creator:template": "",
    delimiter: "",
    "facade:obsidian": "",
    "factory:alias:modifier:strategy": "",
    "factory:alias:modifier:validator": "",
    "factory:feature": "",
    "factory:metadata:cache": "",
    "factory:obsidian:active:file": "",
    "factory:obsidian:modal": "",
    "factory:obsidian:file": "",
    "factory:obsidian:file_modifiable": "",
    "factory:obsidian:meta": "",
    "factory:placeholder": "",
    "factory:placeholder:resolver": "",
    "factory:creator:template": "",
    "factory:template:resolver": "",
    "newable:obsidian:chooser": "",
    feature: "",
    "feature:composer": "",
    "feature:service": "",
    "feature:alias:config": "",
    "feature:notelink:approve": "",
    "feature:config": "",
    filter: "",
    "getter:delimiter": "",
    listener: "",
    logger: "",
    "feature:helper": "",
    "logger:composer": "",
    "manager:composer": "",
    "obsidian:app": "",
    "obsidian:plugin": "",
    placeholder: "",
    resolver: "",
    "resolver:service": "",
    "factory:resolver:template": "",
    "factory:resolver:resolver": "",
    "service:note:link": "",
    "service:fake_title_element": "",
    "service:search:dom:wrapper": "",
    "settings:feature:builder": "",
    "settings:builder": "",
    "factory:settings:feature:builder": "",
    "factory:settings:builder": "",
    "settings:storage": "",
    "template:pattern": "",
    api: "",
    defer: "",
    "factory:api": "",
    "factory:processor": "",
    processor: "",
    "processor:args": "",
};

for (const key of Object.keys(SI)) {
    //@ts-ignore
    SI[key] = Symbol.for(key);
}

export default SI;
