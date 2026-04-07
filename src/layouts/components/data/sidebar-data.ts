import {
  IconAccessPoint,
  IconBarrierBlock,
  IconBook,
  IconBrowserCheck,
  IconBug,

  IconClipboardList,
  IconError404,

  IconLayoutDashboard,
  IconLock,
  IconLockAccess,

  IconNotification,

  IconPalette,
  IconServerOff,
  IconSettings,
  IconStar,
  IconTool,
  IconUserCog,
  IconUserOff
} from '@tabler/icons-react'
import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
import { type SidebarData } from '../types'

const APP_NAME = import.meta.env.VITE_APP_NAME || 'Shadcn Admin'
const APP_SUBTITLE = import.meta.env.VITE_APP_SUBTITLE || 'Admin Dashboard'
export const sidebarData: SidebarData = {
  user: {
    name: 'samir',
    visible: true,
    email: 'samir.dev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  header: {
    logo: GalleryVerticalEnd,
    visible: true,
    title: APP_NAME,
    subtitle: APP_SUBTITLE,
  },
  teams: [
    {
      name: 'ShadcnAdminBike',
      visible: true,
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      visible: true,
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      visible: true,
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  wizardGroups: [
    {
      title: 'General',
      visible: true,
      items: [
        {
          title: 'Dashboard',
          visible: true,
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Income',
          visible: true,
          icon: IconLayoutDashboard,
          items: [
            {
              title: 'Start Income',
              visible: true,
              url: '/start',
              icon: IconStar,
            },
            {
              title: 'Salary',
              visible: true,
              url: '/salary_income',
              icon: IconStar,
            },
            {
              title: 'House Property',
              visible: true,
              url: '/house_property',
              icon: IconStar,
            },
            {
              title: 'Income Tax From Bank Interest',
              visible: true,
              url: '/other_income',
              icon: IconStar,
            },
            {
              title: 'More Income',
              visible: true,
              icon: IconStar,
              items: [
                {
                  title: ' Other income - Casual Income ',
                  visible: true,
                  url: '/other_casual_income',
                  icon: IconStar,
                },
                {
                  title: ' Other Source - Family Pension ',
                  visible: true,
                  url: '/other_family_pension',
                  icon: IconStar,
                },
                {
                  title: ' Business of owning and maintaining race horses ',
                  visible: true,
                  url: '/other_horse',
                  icon: IconStar,
                },
                {
                  title: ' Capital Gain - Security ',
                  visible: true,
                  url: '/capital_gain_security',
                  icon: IconStar,
                },
                {
                  title: ' Capital Gain - Land and Building ',
                  visible: true,
                  url: '/capital_gain_asset',
                  icon: IconStar,
                },
                {
                  title: ' Capital Gain - Deemed Capital Gain ',
                  visible: true,
                  url: '/capital_gain_deemed',
                  icon: IconStar,
                },
                {
                  title: ' Agriculture Income ',
                  visible: true,
                  url: '/agriculture_income',
                  icon: IconStar,
                },
                {
                  title: ' Exempt Income ',
                  visible: true,
                  url: '/exempt_income',
                  icon: IconStar,
                },
                {
                  title: ' Business Profession ',
                  visible: true,
                  url: '/business_profession',
                  icon: IconStar,
                },
                {
                  title: ' Business Income ',
                  visible: true,
                  url: '/business_income',
                  icon: IconStar,
                },
                {
                  title: ' Business / Professional / Freelancer Income ',
                  visible: true,
                  url: '/general_business',
                  icon: IconStar,
                }
              ]
            }
          ]
        },
        {
          title: 'Deductions',
          visible: true,
          icon: IconStar,
          items: [
            {
              title: 'Start Deductions',
              visible: true,
              url: '/start_deductions',
              icon: IconStar,
            },
            {
              title: 'Deductions',
              visible: true,
              url: '/deductions',
              icon: IconStar,
            },
            {
              title: 'Relief 89',
              visible: true,
              url: '/relief_89',
              icon: IconStar,
            },
            {
              title: 'Foreign Source Income Tax Relief',
              visible: true,
              url: '/foreign_source_income_tax_relief',
              icon: IconStar,
            },
            {
              title: 'Losses',
              visible: true,
              url: '/losses',
              icon: IconStar,
            }

          ]
        },
        {
          title: 'Taxes Paid',
          visible: true,
          icon: IconStar,
          items: [
            {
              title: 'Start Taxes',
              visible: true,
              url: '/taxes_start',
              icon: IconStar,
            },
            {
              title: 'TDS Tax',
              visible: true,
              url: '/tds_tax',
              icon: IconStar,
            },
            {
              title: 'Tax Paid',
              visible: true,
              url: '/taxes_paid',
              icon: IconStar,
            },
            {
              title: 'TCS Tax',
              visible: true,
              url: '/tcs_tax',
              icon: IconStar,
            }
          ]
        },
        {
          title: 'Other Details',
          visible: true,
          icon: IconStar,
          items: [
            {
              title: 'Start Other Details',
              visible: true,
              url: '/start_other_details',
              icon: IconStar,
            },
            {
              title: 'Residential Status',
              visible: true,
              url: '/residential',
              icon: IconStar,
            },
            {
              title: 'Regime Type',
              visible: true,
              url: '/choose_regime',
              icon: IconStar,
            },
            {
              title: 'Foreign Assets',
              visible: true,
              icon: IconStar,
              items: [
                {
                  title: 'Foreign Bank Accounts',
                  visible: true,
                  url: '/foreign_bank_account',
                  icon: IconStar,
                },
                {
                  title: 'Financial Interest in any Entity',
                  visible: true,
                  url: '/foreign_financial_entity',
                  icon: IconStar,
                },
                {
                  title: 'Foreign Immovable Property',
                  visible: true,
                  url: '/foreign_immovable_property',
                  icon: IconStar,
                },
                {
                  title: 'Foreign Asset Details',
                  visible: true,
                  url: '/foreign_other_assets',
                  icon: IconStar,
                },
                {
                  title: 'Foreign Signing Authority Account',
                  visible: true,
                  url: '/foreign_signing_authority_account',
                  icon: IconStar,
                },
                {
                  title: 'Foreign Trusts as a Trustee',
                  visible: true,
                  url: '/foreign_trust',
                  icon: IconStar,
                },
                {
                  title: 'Foreign Other Income',
                  visible: true,
                  url: '/foreign_other_income',
                  icon: IconStar,
                },
                {
                  title: 'Foreign Custodial Accounts',
                  visible: true,
                  url: '/foreign_custodial_accounts',
                  icon: IconStar,

                },
                {
                  title: 'Foreign Equity and Debt Interest',
                  visible: true,
                  url: '/foreign_equity_debt_interest',
                  icon: IconStar,
                },
                {
                  title: 'Foreign Cash Value Insurance',
                  visible: true,
                  url: '/foreign_cash_value_insurance',
                  icon: IconStar,
                }

              ]
            },
            {
              title: 'Net Worth',
              visible: true,
              url: '/asset_liability',
              icon: IconStar,
            },
            {
              title: 'Income of family member',
              visible: true,
              url: '/family_income',
              icon: IconStar,
            },
            {
              title: 'Contact Details',
              visible: true,
              url: '/contact_details',
              icon: IconStar,
            },
            {
              title: 'Bank Details',
              visible: true,
              url: '/bank_details',
              icon: IconStar,
            },
            {
              title: 'Salary Allowances',
              visible: true,
              url: '/allowance_breakup',
              icon: IconStar,
            },
            {
              title: 'Unlisted Share',
              visible: true,
              url: '/unlisted_share',
              icon: IconStar,
            },
            {
              title: 'Salary Breakup 17(1)',
              visible: true,
              url: '/salary_breakup_17_1',
              icon: IconStar,
            },
            {
              title: 'Salary Breakup 17(2)',
              visible: true,
              url: '/salary_breakup_17_2',
              icon: IconStar,
            },
            {
              title: 'Salary Breakup 17(3)',
              visible: true,
              url: '/salary_breakup_17_3',
              icon: IconStar,
            },
            {
              title: 'Seventh Proviso',
              visible: true,
              url: '/seventh_proviso',
              icon: IconStar,
            },
            {
              title: 'Directorship Position',
              visible: true,
              url: '/directorship_position',
              icon: IconStar,
            },
            {
              title: 'Nature of Business/Profession',
              visible: true,
              url: '/nature_of_business',
              icon: IconStar,
            },
            {
              title: 'Form 10IEA Details',
              visible: true,
              url: '/form_10iea_details',
              icon: IconStar,
            }



          ]
        },
        {
          title: 'Your Income-tax Return',
          visible: true,
          icon: IconStar,
          items: [
            {
              title: 'Summary',
              url: '/your_income_tax_return/summary',
              icon: IconStar,
              visible: true,
            },
            {
              title: 'e-file',
              url: '/your_income_tax_return/e_file',
              icon: IconStar,
              visible: true,
            }
          ]
        }
      ]
    }
  ],

  navGroups: [

    {
      title: 'General',
      visible: true,
      items: [
        {
          title: 'Dashboard',
          visible: true,
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Tasks',
          visible: false,
          url: '/tasks',
          items: [],
        },
        {
          title: 'Apps',
          visible: false,
          url: '/apps',
          items: [],
        },
        {
          title: 'Chats',
          visible: false,
          url: '/chats',
          badge: '3',
          items: [],
        },

      ],
    },
    {
      title: 'Pages',
      visible: false,
      items: [
        {
          title: 'Auth',
          icon: IconLockAccess,
          items: [
            {
              title: 'Sign In',
              url: '/sign-in',
            },
            {
              title: 'Sign In (2 Col)',
              url: '/sign-in-2',
            },
            {
              title: 'Sign Up',
              url: '/sign-up',
            },
            {
              title: 'Forgot Password',
              url: '/forgot-password',
            },
            {
              title: 'OTP',
              url: '/otp',
            },
          ],
        },
        {
          title: 'Errors',
          icon: IconBug,
          items: [
            {
              title: 'Unauthorized',
              url: '/401',
              icon: IconLock,
            },
            {
              title: 'Forbidden',
              url: '/403',
              icon: IconUserOff,
            },
            {
              title: 'Not Found..',
              url: '/404',
              icon: IconError404,
            },
            {
              title: 'Internal Server Error',
              url: '/500',
              icon: IconServerOff,
            },
            {
              title: 'Maintenance Error',
              url: '/503',
              icon: IconBarrierBlock,
            },
          ],
        },
      ],
    },
    {
      title: 'Transactions',
      visible: true,
      items: [
        {
          title: 'Accounts',
          icon: IconAccessPoint,
          items: [
            {
              title: 'Vouchers',
              url: '/transactions/vouchers',
              icon: IconClipboardList,
            },
            {
              title: 'Day Book',
              url: '/transactions/day_book',
              icon: IconBook,
            },
          ],
        },

      ],

    },
    {
      title: 'Masters',
      visible: true,
      items: [
        {
          title: 'Organization',
          icon: IconAccessPoint,
          items: [
            {
              title: 'Company',
              url: '/masters/organization/company',
              icon: IconUserCog,
            },
            {
              title: 'Branch',
              url: '/masters/organization/branch',
              icon: IconUserCog,
            },
            {
              title: 'Financial Year',
              url: '/masters/organization/financial_year',
              icon: IconUserCog,
            },
            {
              title: 'Currency',
              url: '/masters/organization/currency',
              icon: IconUserCog,
            },
            {
              title: 'Country',
              url: '/masters/organization/country',
              icon: IconUserCog,
            },
            {
              title: 'State',
              url: '/masters/organization/state',
              icon: IconUserCog,
            },


          ]
        },
        {
          title: 'Accounts',
          icon: IconAccessPoint,
          items: [

            {
              title: 'Chart of Accounts',
              url: '/masters/accounts/account_group',
              icon: IconUserCog,
            },
            {
              title: 'Account Ledger',
              url: '/masters/accounts/account_ledger',
              icon: IconUserCog,
            },
            {
              title: 'Voucher Type',
              url: '/masters/accounts/voucher_type',
              icon: IconUserCog,
            },

          ]
        },
        {
          title: 'Party',
          icon: IconAccessPoint,
          items: [
            {
              title: 'Distributor',
              url: '/masters/party/distributor',
              icon: IconUserCog,
            },
            {
              title: 'Supplier',
              url: '/masters/party/supplier',
              icon: IconUserCog,
            },
            {
              title: 'Transporter',
              url: '/masters/party/transporter',
              icon: IconUserCog,
            },

          ]
        },
        {
          title: 'Inventory',
          icon: IconAccessPoint,
          items: [
            {
              title: 'Stock Item',
              url: '/masters/inventory/stock_item',
              icon: IconUserCog,
            },
            {
              title: 'Stock Group',
              url: '/masters/inventory/stock_group',
              icon: IconUserCog,
            },
            {
              title: 'Stock Category',
              url: '/masters/inventory/stock_category',
              icon: IconUserCog,
            },
            {
              title: 'Stock Unit',
              url: '/masters/inventory/stock_unit',
              icon: IconUserCog,
            },
            {
              title: 'Godown',
              url: '/masters/inventory/godown',
              icon: IconUserCog,
            },
          ]
        },
        {
          title: 'Payroll',
          icon: IconAccessPoint,
          items: [
            {
              title: 'Employee',
              url: '/masters/payroll/employee',
              icon: IconUserCog,
            },
            {
              title: 'Department',
              url: '/masters/payroll/department',
              icon: IconUserCog,
            },
            {
              title: 'Designation',
              url: '/masters/payroll/designation',
              icon: IconUserCog,
            },

          ]
        },
        {
          title: 'Statutory',
          icon: IconAccessPoint,
          items: [
            {
              title: 'Stock Item',
              url: '/masters/inventory/stock_item',
              icon: IconUserCog,
            },
            {
              title: 'Stock Group',
              url: '/masters/inventory/stock_group',
              icon: IconUserCog,
            },
            {
              title: 'Stock Category',
              url: '/masters/inventory/stock_category',
              icon: IconUserCog,
            },
            {
              title: 'Stock Unit',
              url: '/masters/inventory/stock_unit',
              icon: IconUserCog,
            },
            {
              title: 'Godown',
              url: '/masters/inventory/godown',
              icon: IconUserCog,
            },
          ]
        },
      ],
    },
    {
      title: 'Administration',
      visible: true,
      items: [
        {
          title: 'User',
          url: '/administration/user',
          visible: true,
          items: [],
        },
        {
          title: 'App Module  ',
          url: '/administration/app_module',
          visible: true,
          items: [],
        },
      ],
    },

    {
      title: 'Reports',
      visible: true,
      items: [
        {
          title: 'Balance Sheet',
          url: '/reports/balance_sheet',
          visible: true,
          items: [],
        },
        {
          title: 'Profit & Loss',
          url: '/reports/profit_loss',
          visible: true,
          items: [],
        },
        {
          title: 'Stock Summary',
          url: '/reports/stock_summary',
          visible: true,
          items: [],
        },
      ]
    },
    {
      title: 'Other',
      visible: true,
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Display',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/help-center',
          items: [],
        },
      ],
    },
  ],
}

// < li class="sub-menu left_menu toggled" id = "li_others" >
//   <a href="" > Other Details </a>
//     < ul id = "ul_sub_others" class="left_sub_menu" style = "display: block;" >
//       <li id="li_sub_other_details_start" > <a href="/other_details_start" > Start Other Details < /a></li >
//         <li id="li_sub_other_residential" > <a href="/residential" > Residential Status < /a></li >
//           <li id="li_sub_other_regime" > <a href="/choose_regime" > Regime Type < /a></li >
//             <li class="sub-menu toggled" >
//               <a href="javascript:void(0)" > Foreign Assets </a>
//                 < ul style = "display: block;" >
//                   <li id="li_sub_foreign_bank_account" > <a href="/foreign_bank_account" > Foreign Bank Accounts < /a></li >
//                     <li id="li_sub_foreign_financial_entity" > <a href="/foreign_financial_entity" > Financial Interest in any Entity < /a></li >
//                       <li id="li_sub_foreign_immovable_property" > <a href="/foreign_immovable_property" > Foreign Immovable Property < /a></li >
//                         <li id="li_sub_foreign_other_assets" > <a href="/foreign_other_assets" > Foreign Asset Details < /a></li >
//                           <li id="li_sub_foreign_signing_authority" > <a href="/foreign_signing_authority" > Foreign Signing Authority Account < /a></li >
//                             <li id="li_sub_foreign_trust" > <a href="/foreign_trust" > Foreign Trusts as a Trustee < /a></li >
//                               <li id="li_sub_foreign_other_income" > <a href="/foreign_other_income" > Foreign Other Income < /a></li >

//                                 <li id="li_sub_foreign_custodial_accounts" > <a href="/foreign_custodial_accounts" > Foreign Custodial Accounts < /a></li >
//                                   <li id="li_sub_foreign_equity_debt_interest" > <a href="/foreign_equity_debt_interest" > Foreign Equity and Debt Interest < /a></li >
//                                     <li id="li_sub_foreign_cash_value_insurance" > <a href="/foreign_cash_value_insurance" > Foreign Cash Value Insurance < /a></li >

//                                       </ul>
//                                       </li>
//                                       < li id = "li_sub_asset_liability" > <a href="/asset_liability" > Net Worth < /a></li >
//                                         <li id="li_sub_family_income" > <a href="/family_income" > Income of family member < /a></li >
//                                           <li id="li_sub_contact_details" > <a href="/contact_details" > Contact Details < /a></li >
//                                             <li id="li_sub_bank_details" > <a href="/bank_details" > Bank Details < /a></li >
//                                               <li id="li_sub_allowance_breakup" > <a href="/allowance_breakup" > Salary Allowances < /a></li >
//                                                 <li id="li_sub_unlisted_share" > <a href="/unlisted_share" > Unlisted Share < /a></li >
//                                                   <li id="li_sub_salary_17_1" > <a href="/salary_breakup_17_1" > Salary Breakup 17(1) < /a></li >
//                                                     <li id="li_sub_salary_17_2" > <a href="/salary_breakup_17_2" > Salary Breakup 17(2) < /a></li >
//                                                       <li id="li_sub_salary_17_3" > <a href="/salary_breakup_17_3" > Salary Breakup 17(3) < /a></li >
//                                                         <li id="li_sub_seventh_proviso" > <a href="/seventh_proviso" > Seventh Proviso < /a></li >
//                                                           <li id="li_sub_directiorship_position" > <a href="/directiorship_position" > Directiorship Position < /a></li >
//                                                             <li id="li_nature_bp" > <a href="/business_profession_nature" > Nature of Business / Profession < /a></li >
//                                                               <li id="li_form10ie" > <a href="/form10ie_details" > Form 10IEA Details < /a></li >
//                                                                 </ul>
//                                                                 </li>