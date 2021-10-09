const si = require('systeminformation');
module.exports = {getItem,getItemSimple}

// diskLayout and networkStats are tricky since they return an array of objects
var dict = {
    cpu: ["manufacturer","brand","speed","speedMin","speedMax","cores","physicalCores"],
    cpuTemperature: ["main","max"],
    bios: ["vendor","version","releaseDate","revision"],
    mem: ["total","free","used","active"],
    currentLoad: ["currentLoad","avgLoad"],
    diskLayout: ["*"],
    networkStats: ["iface","rx_bytes","tx_bytes","rx_sec","tx_sec"]
};

// get info
function getItem(obj,param) {
    if (param.toUpperCase() == 'ALL') {
        param = '*';
    } 
    valueObj = {
        [obj]: param
    }      
    return si.get(valueObj)
}
function getItemSimple(obj) {
    valueObj = {
        [obj]: dict[obj].join()
    }      
    return si.get(valueObj)
}