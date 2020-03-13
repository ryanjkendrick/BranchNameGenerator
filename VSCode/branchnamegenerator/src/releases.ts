import * as stringHelpers from './stringHelpers';
import * as branchName from './branchName';

export async function releases() {
    var name = "releases/" + stringHelpers.dateString() + "-" + stringHelpers.timeString();

    branchName.showBranchName(name);
}