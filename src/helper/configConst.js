export const defaultProfile = './images/default_profile_normal.png'

export function getPathNumber(phone){
  return phone.substr(-2)
}
export function getCodedEmail(email){
  let arr = email.split('@')
  let path_login_email = arr[0]

  let vis_login_email = '';
  if(path_login_email.length > 2) {
    vis_login_email += path_login_email.substr(0, 2)
  } else if(path_login_email.length === 2) {
    vis_login_email += path_login_email.substr(0, 1)
  }
  let novis_loin_email = new Array(path_login_email.length - vis_login_email.length + 1);

  const coded_login_email = vis_login_email + novis_loin_email.join('*')

  let arr_serves = arr[1].split('.')
  let p = new Array(arr_serves[0].length)
  let str_p = arr_serves[0].substr(0, 1) + p.join('*')
  let s2 = new Array(arr_serves[1].length + 1)

  const coded_serves_email = `${str_p}.${s2.join('*')}`;

  return `${coded_login_email}@${coded_serves_email}`
}
