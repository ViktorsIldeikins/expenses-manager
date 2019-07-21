export default class Group{

    constructor(name) {
        this.name = name;
        this.subGroups = [];
        this.entries = [];
        this.parent = null;
    }

    getName(){
        return this.name;
    }

    addSubGroup(subGroup) {
        this.subGroups.push(subGroup);
    }

    getSubGroups() {
        return this.subGroups;
    }

    addEntry(entry) {
        this.entries.push(entry);
    }

    getEntries() {
        return this.entries;
    }

    getTotal() {
        let total = 0;
        this.subGroups.forEach(group => total+= group.getTotal());
        this.entries.forEach(entry => total+= entry.amount);
        return total;
    }

    setParent(parent) {
        this.parent = parent;
    }

    getParent() {
        return this.parent;
    }
}
