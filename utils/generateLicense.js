const genLicenseImg = license => {
  if (license === 'MIT') {
    return `![MIT-license](./utils/licenses/img/license-MIT-brightgreen.svg)`;
  }
  else if (license === 'GNU GPLv3') {
    return `![GNU-GPLv3-license](./utils/licenses/img/license-GNU-GPLv3-blue.svg)`
  }
  else if (license === 'GNU AGPLv3') {
    return `![GNU-AGPLv3-license](./utils/licenses/img/license-GNU-AGPLv3-blue.svg)`
  }
  else if (license === 'GNU LGPLv3') {
    return `![GNU-LGPLv3-license](./utils/licenses/img/license-GNU-LGPLv3-blue.svg)`
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `![license-Mozilla-Public-License 2.0-orange](./utils/licenses/img/license-Mozilla-Public-License-2.0-orange.svg)`
  }
  else if (license === 'Apache 2.0') {
    return `![license-Apache-2.0-yellow](./utils/licenses/img/license-Apache-2.0-yellow.svg)`
  }
  else if (license === 'Boost Software Licence 1.0') {
    return `![license-Boost-Software-Licence-1.0-yellowgreen](./utils/licenses/img/license-Boost-Software-Licence-1.0-yellowgreen.svg)`
  }
  else if (license === 'Unlicensed') {
    return `![license-Unlicensed-lightgrey](./utils/licenses/img/license-Unlicensed-lightgrey.svg)`
  }
};

// license text comes from https://choosealicense.com/licenses/
const genLicenseText = license => {
  if (license === 'MIT') {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

To view the full license, [click here](./utils/licenses/text/MIT.txt).`;
  }
  else if (license === 'GNU-GPLv3.txt') {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.

To view the full license, [click here](./utils/licenses/text/GNU-GPLv3.txt).`
  }
  else if (license === 'GNU AGPLv3') {
    return `Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.

To view the full license, [click here](./utils/licenses/text/GNU-AGPLv3.txt).`
  }
  else if (license === 'GNU LGPLv3') {
    return `Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.

To view the full license, [click here](./utils/licenses/text/GNU-LGPLv3.txt).`
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.

To view the full license, [click here](./utils/licenses/text/Mozilla-Public-License-2.0.txt).`
  }
  else if (license === 'Apache 2.0') {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

To view the full license, [click here](./utils/licenses/text/Apache-2.0.txt).`
  }
  else if (license === 'Boost Software Licence 1.0') {
    return `A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

To view the full license, [click here](./utils/licenses/text/Boost-Software-License-1.0.txt).`
  }
  else if (license === 'Unlicensed') {
    return `A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.

To view the full license, [click here](./utils/licenses/text/Unlicensed.txt).`
  }
};

module.exports = { genLicenseImg, genLicenseText };