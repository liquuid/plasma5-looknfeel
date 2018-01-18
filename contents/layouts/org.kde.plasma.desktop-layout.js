var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "830",
                    "DialogWidth": "795"
                },
                "/General": {
                    "ToolBoxButtonState": "left",
                    "ToolBoxButtonX": "46",
                    "ToolBoxButtonY": "30",
                    "arrangement": "1",
                    "iconSize": "3",
                    "pressToMoveHelp": "false",
                    "previewPlugins": "ffmpegthumbs,gsthumbnail,rawthumbnail,kraorathumbnail,imagethumbnail,exrthumbnail,jpegthumbnail,svgthumbnail,directorythumbnail",
                    "url": "file:///home/liquuid/Área de Trabalho"
                },
                "/Wallpaper/org.kde.image/General": {
                    "FillMode": "2",
                    "Image": "file:///usr/share/wallpapers/Breath/contents/images/2560x1440.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/General": {
                    "pressToMoveHelp": "false"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "right",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/General": {
                            "favoriteApps": "preferred://browser,systemsettings.desktop,org.kde.dolphin.desktop,org.kde.kate.desktop",
                            "favoritesPortedToKAstats": "true"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickerdash"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "launchers": "applications:firefox.desktop,applications:org.kde.konsole.desktop,file:///usr/lib/virtualbox/VirtualBox?iconData=iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA2wAAANYQHlRq2kAAAJYUlEQVR4nOWbW2wU1xnHf7vLrm3isBgo8dohkFYuTQgQoI242FaCVHF56lOp1CD1oS-VkodUeUgfKqVS1beqlaKmL1FUqX0iqpSqauOGkoCpC0QUQkMoxCY22LXBYHz37tzO6cOZ2TkzO3vxsosN_UtHu3Pmf8583_985ztnZmfh_xyxwNFrw004iR8R4wdIti6RTfVBjM-Q_I6E81t-tSHrV3t4bbgdO_FB65r41iPdzWx9OsWmTBILEICQIJfA7sXCs1EANmBKuDpq8emAwam-eWamrM-J5Q7yVscIeAK8-XmKiZbze55t2Prmyy0kkzEMCTkBhgBbgiODF1jO8Gx0UAJkBcxKGM9J3j92j9GB-f8w_sddvPfj7AoA7qRfyayLb33j-y2IRIwpG2bdsmCD7YogHwbvNQjUwOUkzAqYEjGeP5Bmctx8Jmvsfx34uRIgxtHD3c1YiRgzNkybMJGDqSwsmGDaIMTDMfo6JGrqGgLmBBiORUxm2fhMgqsTjUeBX65wmc9u7mhkyoEZA8bn4O4cTM4rARzHnQJeWe7QUruUYEiwbBtp5YiLLE1JE5JNG4G0K4BMJR-PM2nCxALcmoG7M_DnzqWxv9bY-SeBsC2kaYJlIB0TZGMKeFwJgMQkxoIN0zmYXoDZhSW1uaaQQoDjIC0bx7AQlgU0AKTiigGmgKwF2RwYBtj2UppcY0gJQiKFBFsgbcebyrG4R7Clm-0dd847S2lxjZHPX2opk46_pHlJ0Dunsn2RRLfz_Qdj7_3iwnfKELRkns8BmkBKgCgRHoYVIAoyXHwH8zkgskHZjqovu9aW56STsK2liv4rtdsXQAZGPx8F4X4iONWW17dBU6I0Z896eKlt8X1XYrdHzAsQqValSi6ytDbB5tWwa11pXlcrHHiyimuUsjt_HBAgolEd0ZVxP1tL83Y_Aa0roSNdByMCU8A7qnYuLbJ4jndlinM6VkFLg-Id2rDIa5SzW_PZnwIyokEdBGiIwwvrVXetK5WjUbxOLTo6SwhVlQCFU-DBRcAL66EhUd65rjaf05GGTc01ECDgQ0AA96mPdq5eq8Chp4J9dmUKOauSsH1tkPdSe-XXqMRuT5AHugrEgb2ZYJfb16n1XuftbYV48Gkl-xezGkTZXWB_1BSIalRDAbavhXQq2GU85oqi8brbKMBza1XOqEkO0Hx-oDmgK8IxcB3Wo6QI78X2Ggjg-VuwD9DDRP-spQDt0Y7tbXMNke6USEXzDjxVAwFCvEAEeMmhHkmwdSV0rPb7-uug_z2dgm3rFE-PkrF5uDjuH2__CqxKlb9WObv1HLAiz4hSLIRLRwvrdId-crr4-UObgsfvXoYd6yHzmDruboeLt4NRcnoE-qcUD1S-OLARjl0rfp1IREZAOAdUEkolsK8NkrFiF4PuJ33u2Dz034O_3_DrutohsxI6Wvy6j27C6eHgdboryQPlBPB8ZrHLYAmkG2B3kU1NOqXC18PpYVV_QhOgowW-u9k_njbg3CiMzcGVCb9-d5ubI-47BwQE0Ih6g0XixSJ79n1twXX9oxuq_tJt5aiHo1v8733_VU-nkHB8yK9PxlV_VQlAIS8fAd5vf4LiyWTbu4Xl4m3__Lc3qUfy4aTTpYX_tAFnR1W9I6BvJOich95hv33vzaAd-zdWlwTxZnpkDgirVWEo9WpzNN0AO9cHz8eBfZoAfSP-yCKh58vCy1gC-oZ9Tv89uD7ln-_eoG6qajgFpE_UbwrCEIXl-PUg5eDTwfOd7UoYD703g-fPjIARegR_ZgSms0HeySH_fEMC9rRF24OowO6SEeAJUaGSN6fVCHnoCm1Wujdodkjouxk8b1gq2enoDXGQcGIoyDn41Wh7qk6CXt1i76qkhI814zLNsOMJbf5rd38XbsFUrrD9h6Fp0HujkPPZbbUieNi3ITrfVH83qGdJ_bOsktAzEKR1u1HQ0aIE8dAzEN3-5KCKDlDRNDYbzevVls10A3QWe1JUkd2KGNwJ6h0U6ygC_RNqdDxnD3fAr8-6QmjoHYruYzoHn96CnRn4yxfFr9MzAEe0pfI3h6J5kXaHfatVDvCKngwzzdCxBro3-nX9E8VHFuknud4bxTkXRoP7hopRPgdIChVanAAnQqvBD3fA89pzvVKOIaGnXwnUf7c4Rwg3imovgKrTN0GLvRu8OAaTWZ97-OvB3d-pwdLtR2fgnX-V5kgJH_RX4b8-vp5vrn-Fd4PlkkkRCAkfDsCRiJfrxmZV-JbDe5dLXwOgdxCee6s05_KroYqKp0C4QRglQhipRjnS6KHybb0Qr4RXtlRktyJGrwJVRADAmZsqo6cbg_WnBsu3rSvCPkXlgKLkYh1FFMuGfwwFmxg2nIvY2dW1lLNb89m_G3QrpXQ3JREdlUtQUsLHoV3d2WHIWZW1rVWpxO7oKRBWLErJMvh4AHI2NLqvXvRcq6xdXRE1_wNTwLOwqmQSLDnLDXnUu4WnrlfW7oFOAen7XPhYXG9UhQBI6Lmq6JdG3dva5SiAyyv-y9B94NSX7uhHPOxYNqjHMuhhOgsXRqDXC_-lRpRfQQFUff5BkIwOisUEytv_hGvj5XkPAvnsj58DPSHyr8mF18f7iQCAc0NVWFovlEiC-QgIkyNHezmEczXQHRdaKKDlgPydIMVD_cobdTe1jgiNavhmSEj1nN4RwTnySMDd3koh1Jvj2vvA-Z8iDOH-seBRfFnadR7hqCJ95_IRMGNI5myYt2HBAtt5dEJACgvpmH7RIsBLgubYhJGynEbmsza26SBsyTd-pncTK-x52UI5J6UAYSPtHMJcQJhZhGVgGw44pgFIT4BPRv99p3PN19YgDAthOIicgJjndEz7vsyRT3QSKRwQFtI2EOY8wppH2gbZWcCcuAWYrgDi9zf-Nty56mjSFcDCMbQ_DrjOx5Z5FEg9cwsBUqjwtw0VBY6BcAQzk0mYunwSmFUebTmWomVNX3pT8zfbt6ex7prYsxbSEcXXxGUOKV0BpAOOhRQ2QkgmxlPkJsdHufjq97DvnPeHtKsngyP_kHysaf_qTIoEDivignis2C-lyxxSIpE4tsAywDRizE0ncGaHrjP49k-ZPH8cmAjHdIJvHXuFFQ0vE2_aQmxF01LYXnMI08C8O8zMlZN88Yt3gAFgCnCiJnUMaARWAc3u9wTanuEhg_c_6hwwB8wABm5Y_w8xjjBKRA1URgAAAABJRU5ErkJggg%3D%3D,applications:org.kde.dolphin.desktop,applications:systemsettings.desktop,applications:steam.desktop,applications:visual-studio-code.desktop,file:///usr/bin/transmission-qt?iconData=iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAA2wAAANYQHlRq2kAAALFklEQVRoge2ZW2xcx3mAv7mcvZ69kEtKlEiKFkOJdBTF1sUWFNsoYjkp4MZ9aE3XcZsGBQr0EqRFY7d56YMKNAUaoyjiJgHavhjwQyGoKIq-NAbaWG5rOKrL1rJKSbbIkJYsGbqQe79wz5mZPuyS4m2XlC_qS35gyXPOzPzzfzP__PPPOfAz-Zl8LBGftMIXX_zz30Da7wDJ1c8doi4Qf_aHz3_7pU-yP72dSt-H48CTCh4CPmtgtwO1oaIQ1IMlDj38MJlMGkR7fJyjXKmkp35y9nsved73RBBsbApGw4cCLgUwZeDV34fXtrJtyxn4IXzH37PnWwcefzya2bNHeEJ0pDbAKT_Ks1_9VYKgiXOuzSXwvAj_cPoUv1CsEW8_Xy8hEDhH6do19-6ZM_X87Ozf_S78Zjf7tpwBA3_05cce02JqivDUKTCmizaN-JM_JuWnCcNgXZFGWgsvvQSVSkdjtFL4IyNi-JFHEn8_N_drf23t878FxY8MAGhTKFA9f37Lisba9v-Q0IRryoQUOBy1IMA2m90VXbpEYmgI5Xk2WFqK8zEB7OzsrAyzWcJiETpMP4AFHGCMIQzXAkghcQ6uAl633oRAJZNEr12j2WyqJnSl3RJAwt9cmJn5WioWS-p0Gt16tqk43VJnQoNZB2CkwglBPZ2mKTfX4IAACI2hOjNTFc79y7dg8WMBfAN-56_C8J_zlcrTAh6wMCogSmvANwOIGms2uJCyGuccH5ZKTVEub5hGB1JAIGBOwHkD__hNOLWVfdsKo9-Ef6L1A-AH4Dc3aVubmIhGpLhmjFHrXUhrg_C8RvPJJx-Qp07dXN-2CebbUN6OPXcNsF6-AZuGkZNPPx2LIDZdA8aEWJwzR46Unj91qvBR-t1MPhLAVmLMRhcyxrSc_BOWTwkg3DADYbf942PIpzcDG1zo_wHg5MmT8sKF818TWv6es25sK2UX353myJHDqhOAtSZ-7vy595559unuziREA9x3E1H_By-__HKja9Vuhc8888tfjcSifzs0NJRMpdMIsXXy6mnFiSdOUC6X1jxP-WleO_MaS0sB6xfDarXOQaNe5-oHH1SrlWo56sXHXnnllWqn_rq7kJLfHd07mvQiHrVaFWs3hP4N0pPNdnQhZx3VSgXrOusRQhCPxZiYmEi-9957olwq_wHwp3cN8Nxzz_Ug7c6knyRfyOOco1goUioVCYJw0zZCCI4ePYI1doPPG2twzjE3N0ewSToNkPJ9kr6PtRbnYHh4OHFh-sILHwnAmMZe3880QhN6AKVSCS_i8eWf_xJSbZ4KNOoN8osd8y6sdXzhkeOts8KGMkuhWOCts1MorRBCkMvlEEIkJicne0-fPr1pStERwApGY_EEQrRS4VKxzOSv_BI9PdmOBs7MztNtmQgBSkXYMzLcocYInvY49_Z5fN9HSkksFqs3atX9wE_uCsBZRv14Ig4CIQShCRgaGuy6kAv5UseyZSlVyvi-37F8164Bpt76H5RqHfiSSV_V6tV9dw2glfxsIpnUUkisdSQSyS2j0NWrV8mmU5QrFQrFO67kHAihqNXr5IubH2aWpTfXS71RRyuNQOD7yfjt23Kio52dCoRUE8lkktAEGGPIZNLI5TTYLQfCO-HQObjywXXUyBDFUpmFhfzajpRHrVrn1s3bXQFas-NamoXD930plTh09wBC3BePx6lUDWFoyPZk0UqvM5uVA44DapUalWqNUrHM4jqAaCRGuVKlVqt1HQgcZLIZgiDAOUkqlQbk-F0BnDx5Us7OXc5FIhF0Q2HCgP6-PrT27nS4pk9HpVwhGvWoVWsUSyUWFvNtvlbFRCJJpVpFSIkJLdFopONA9OVyBM0mUoDvp7DGDHYC2DQeTk9PD0Wj8UBKidIa4yy9vb0ordFKo5WH1hqtdfuZx8JCnlTKp1gqt2YgX-D2wiILi3nyhSKlcoVSqUrKT1AoFlG6rUO1f9pr6dKagV27aDYDEIJYLIbW2j777C_u3vYMOOVGk8lEIISIa6UIgoBcb27Fhe4M2p0xLBSKKCEpV6rMv3-FXG_fsicjEMxfuUqxXCaXy1IsVdizR7dncZ0TOUd_fz-XLl5CtyNRKpUKFvLhfuD6tgBw7M1k0loASimW6g1ybRdadp9VyxeAxYVFnDNI4Pz0NFLKVtRyLVBrLclEHGdDKuXymsFw61xyYOcA9foSSikEkM326PzC4j7gzLYApGAslc7EEQKpFLVajf7-_lWdulUj1vpTLLUOWZ__3DhK6w1ZogPCIKBYLFEsFPE8bwXQOodblR_t3DlAuVxCaY0TkM1m40LJA5vZuimAVvpAOpUSQoA1hlg0RiwaW2NMX0__SjQJTUjQDKhWqzQbS3Tcjp1DKMFSo85A_-BKe2stN25_iGjrTvqaRDxBEDSRJMlk0kIq9cC2AaSW-_yUTxiGNJsB2Z6eFfdxrtXh6_9-hqmptzDGtF8dakDgpzrvsgD5QoEwNPzFX74IOCKRCIcOHWJi4n6klCtz27cjR73eIJNxZLM9APu2DaCkGo7HYtTrdZrNBrn-3J3YTWtdHD58mLGxMV599Udcv36d__rvt6lWayw1N880l6XRaPDu5Rkm9o8xNraP48ePE4u1ZnfVmmb3riEqlTJSCDLpNCYMd05OTqrTp0-vSXM3ADz11FMJpWQ8EonSbAY0Gkvs3LFzU2PS6TSTk89w6eJF4vEYl2fnuHjpcsdzw47-HD_38CMMDAxw4vET9OZyHUEHB3dz7tw5pFRo7ZFIJJbKjeoI8NOuABE_sjedyTaEEL7SimYQkOvr3BHAxP33s2dkhB__-F8ZHhrkjTff4vbCnew35Sc59tBhBnb08cUvnuC-vXu76gPYObCL2ptvorQCCb09vaZ2tbpvSwBlGM1mMk5KiVaapfoSud7uAACJRIKvfOUp3p-fJxGPMzs3z9vnLvC5A-N8ZnSEh44-zIMPPriSZW4lAzt3UCqXWkmdE_T190WvfHBlP_BqVwAke3t7eyPOOZRSNMMmYpudAozcdx-__vWv82-vv87I8CCjo5_h0UcfI5FIbFsHQDyRIGgGLWABfX19UU9HDq6vtx5ASqkP9GR7olJKtNbsGtjFG2_8BxPj40Sj0W11HvEiPPHEl3j00cdWFujdiHOO_zx7lv7-Hej2C-OebC9ayQdgJdpuABAHDx7MSCkPL7-BUEoxPr6fs2fP8sILzxOPxXFYnBPgHE44Vvaf9j2O9gGgdYRcLdZaRKtp-1qsSUeWjbfW0t-_g6NHH2rtxkKS7ekhdHZs7Nix1MzZs-VliBWAAwcOeCIaHXTODlvrWFxcXFF-8ODnGR-faL0udAIhXGuzWn1NS6UQtMtY2WmXt-XV9-uvlzlE-345bC8sLKCUIp1OY4Iwm4pEho4cOXJ5amoqWAOQTqdV1Zgea61XLpfI51sA-_ePk0ys-eB4z6TRaHDx0gW00ivfGzxrczdTqZ_S-pSwdg0456RzjlKxyI2bN3DOcePmjXtv-TrRWrc-UTmHCEONd-cbz2bnAdsMmkQi21uw90K6ncU3AASheefW7Vsum81uO2Z_miKEwPd9qtXW20Ur127zKy4UjUZdzVpTrlR_9P78-1-Ix-Oxwd2DG6LEPRchaDaXmJmZwVl3bsmpNS97VwBu3bplI76_eHOxMOUp9f3p_53-baWVp0SnT3r3RqxzhGGonHPztwuFH0rnFnPlsplvl692LjF27Fgqq_UuG4Y9HsS9WKx7bnyPxBgT1IxZFNbmbb1-_Z133qnR3gf-D8RLy8IWZe-3AAAAAElFTkSuQmCC,applications:idea.desktop?iconData=iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAA2wAAANYQHlRq2kAAASPUlEQVR4nO1dT4wUR3f_veqZ3WVZYJE_OyHf98XWJnBAcWQFB6Ikn4gCvmBk5JsPln1wZPmC5L8HX-0cuOaQm2P7almR_8gxksnBPnnlKIoCOIL9sL2A8QfCgNkFszs7XS-H-t_d0zPs1IwbqB_M9nR1T1V1vVfvvXr1qhpISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEi4q0CR8ih-EkYHrvisG8MSiwAIAOLUnn_qDJmXexoifU5gIp1OAOk0XW11zb9X3wcqtJDLByCAhEsHvN-pPL-Zvg__vu0vSvWbzCUy9upK7rtfJmxZ6JEWflfP5dVBX8sgISAr2-rovx2YACD1Z91MINb7Qw3DABPVjHl7HwqagEGQIPZIytD36CZndU94r2kTV0EC23wABljqfKR3zVCW8We3ruDQpf8LHrQtJVrs1xUg9kUe2-_MFc_EqhzAPQPb-rh6Aq5X5hDIKevV9hO67YfqxK1hfqwLbwGYNAk7prcOmaXrzYDXU3tIAtUTQ0kgCWAIdV2oavr3uXzIIxPAJOz3OQD3ryzhvW1_ibaUmM5zSPLygvvu6uPqDwCyIAnMkYXf08l1YU9K-WWAGBOyCwBYvrZommkSKHD7OhCDATIobowG1dsJTBJkhBQzIAgAg0FaS7CuAlsiEBhEBNUuQuejrqjb3W-Yoe_VaSwBUp2KmfHo9e-RQ-A_798BECBAkCYvuPIZANl8YesowJoZCV4pADOYTBqrfKEkBxGZJ7Q5gQmr1MYkr_nNNAGggwZIAAEgs9WIZAKSaVySujFIMQEJVBNPMYEEKVFrmYA8JlAMUWQCENnyFBNogcyMPdfPoSUEjt735wAY5DEU-_VkxQSO2Pp7wHQhEzgJ5DGVTTdyxD3jCrXhSkaGCCpgWBsgdj4BlH4GfF1KLD2bwNkHRiCE9oHTtyofab_b_FDUzbA2gcpTYte1Rey_8m1QJ6d0_N-58kUh3dXV_EalOQp6-bGpr28XKKXWpQyShCliaIyEcDFRZgIqGIZlQvdmAnL5BEyAGiZQ0uVvrn2LvdcWLWHBLl_zO5h82TGBbxz6TOCniSIje8_dyziMhcYzAFBkAtOLnSXPLN19PZlAmVuKOMp2MqMGn-gKhd9AjRz-_srv8bc_nfeYDyVGsj2Zw4Gdz2ih6Qlbz-AZbBll5lj3mK8CdwQDAL3UgdczPNVQzQS-yC_02AITWKIVGp-YsffHU9i9fKFCvYRMINTBI5w_fHW9WXi9O3ieCslh8o1kZgEY3ggcGEoNsjV61svFzM7hE_YlUpIgcPJ4Qz6GN5Q0-WiSMIEphx066nthr3nlMPAPF09glRn_M_PH9jnc0DXo12qMRr4s8L57lGQIbe8RSBhFUzYOLXNFwlgYgAFIZkgw9nf_axxFjh5L_zGSbLc9-q9gySCRwWcCNZhgzcjxyhuLCmBN_I7Mx1HcHQ3OO8pPIGVJBQG-KoyDiBKg6PPyrzC6nGNVdrWbNKEXZN5BRgTKlG-NrNPIqU2qaOP1YjwSAIycGR1OEqAfOF8DswxHL4VhZUyM1QbIeRjz794Acw4gBxNDUMEpTARBgLzTJICBTOK_P1iWPJWA70OIS7SxDQMNkg1QD99XAGY732HnGOxwMA7uGEfQvYTAs1hwZwudFgtJAjQQxckh4wSSNj2eBBg7A9Rh79692LRp08D3f_HFF1heXo5S9sMPP4wHH3yw8trZs2dx4sSJKOX0QzATqY9qWpmh40iiDgMbJQGeeeYZzM3NDZzX119_jaWlpRjVwr59-3Do0KHKax999BGOHz8epZx-8Ke1XT93sQXK0X0HS4CYKoCZx6ZSxlVOMbahGGCiXMF36DAwYTA4B5BhgkJcwJ3mCjZzYCoEq5kSoC6fcUoaP8BEzzKr7xTT9HOIxwBmbFo5RiWVTlTbkO-88w42b96MRx55BI899ljlPZcvX8a7775rv999KiB0AqmoRrIxjyZCMBbiMYBpoKqGYnafGnz--ecAACFETwZYXl7Gxx9_PExNGw2zpIDhfAF2StgGsjTRCKTC0QNDBVhIUS8BBsGoxHFTVIAwYSk2ysgPBFNGIEU0AiJKgPBoNZmAWuBEUj3aAA3Z755fwpk0zjIZsExQDEFX7uB4ZUWVAAyCJApCoIwmk6RDqyLU_m6WAGHouA7_IUP-BqsAaRZTkBuwmFg6CRV2maIBBgApEa-b0fkC3EKBpnoClY9KkvC0Abk0InVMKqAWpFf7lTyBrJbDNVYC5LpO0vCnF0mbs1TpA6qAe5kB9MqSkifQMkFkT2A8FaAJLL0VuAA0I5BbeZtsgL7w1y-AjCfQeADihgVHYwDWol9qp4_zZ6m03DDHkBJg3MTwyx0HwmVgejkbIZAFayKeBz-eCth4C-hMQLYASLfwAtDDQBAksiQB-iD0BGrCayYAGDkJXGpvjFZeNAbo_PUJ5BBYemAGOTLkeRvcmQRuzADXN6Dz0wRWfwJwJVaJdyk4jAVQ3xQTdInww8RM1JCweCqgODQREvnUGuTUEla2LuPnNeD6CoO_TUZgHWzcH0ybailKwHcbZsG3fopaXvR4gOKcYLHZ0iigHibqVxSY4LuprW6EFRFRGaCa6L5Wk8kG6F8TK_oFM3IifLthC9ZoFMtCoqoAwAtlQLgwWv1lDC8BRkWMVqu-KcYrddj-_W5qK1apFTrXIgYGRJQAPrF7c2pTJcDMzEzPa3mej2820NukYnFqC34WLcAjekziA5FDwryd72yKtN9gJcAgn9pybiOPXbt2DXTv9u3be5Z39erVgcsc9gOoyODvJzdhOZtS3lNy7Re27_CIHBNYlALBVkkqbYwMcPjwYbz11lt46qmnau_buXMnHnrooZ7lnTt3bqwMcHFyBlfbGwPCFz-xEI0BfB0Fz41RvGdY4mPAPJ599lk899xzICK8_vrrOHLkCGZnZ0v3zc7O4o033qgt7-TJk2NjgKvtaVxqbwQbm6nQtmZXo1gYWVh4r-HgoAQe5vrBgwfx8ssvB2kHDhzAvn37cOzYMSwsLODGjRuYm5vD448_jq1be-9u-s0332BxcbFvnWPhwuQMRNGAth5VszFwQxnAt_bDc18qjBZ79uzBm2--qRdVhpicnMTBgwdvK7_33nsvVtUGgt7aUm14Sf6439vvKCJGMAw0J9XDwbre-8EHH2DHjh215Wzfvh0nT54EADz55JNYWFgIrj___PNot9vreIIyFhcX8f777w8ktWKBdeSUa0o_KiA-A0Q0An0PNtWqgPXq_iKq8njllVdw6tSpYR8GKysreO2117C6ujo2_c_MyvCjkBGCc4GoVIs8DHTHsvkHQMcDjJIBrly5gqeffhpHjx5d93MsLS3hhRdeGKvx5z56mzrWM6rsb3fn0mJhpEvDitsb9hsF3Hb-PfK5ceMGXnrpJRw-fBhnzpwZOL88z_HJJ5_g0KFDmJ-f_wWIz1bMG4-fGwp6sZa33VK9EdkGKA4HzZEDFdALZ86cwdraWs_rRaysrNTm99lnn-HYsWPYvXs39u_fj127dmFubg4bNmyw9ywtLeH48eP46quv8Omnn-L8-fMDlz8KGMePaj5n_RvEHAIC0V3BvS39QRjgxRdfjFcdr7z5-XnMz8_btA0bNmBiYgKdTge3bt2KXuYwML1djQRMmmcIRh5IjXA2sDgcVCGOUg71gosouHnzJm7evPlLV6MSytFjoKUoufOGzwaWVUBRKoxzSHUnwu1xTIEaKE-xx8EIlod7fv_CcLDbmU4M0AdG_5sFNjY9OMZrw-gLQ4DebuCLZ_8KzJ_HK_KuRLgkxIDd5Wa6gut5UlW4s7oxSYA-qBzmeUTnyHZAdBXA2g1sKik9HSbWOd6_l-AzAHmEN4Zh7LjAqMNA58Rw52Y0sHz9T4GGjAKaDPWCCYL5V_arNNQR1A-Xzj8M4ltJAvRBKOLD3m7nAyJihMNAc1SBzjLPlCcgMUBfhG8fgo0HKA-xh8cIdghhqwKsK5Ptqx8TA_QBQ7eT2VQruFZYeBsBkW0AAqjAvQB-OP-o3vIkSYB-KIr5cjwA0FBHkAKzMvt8VXD9ym8AuQqRVEBfhEQuiP4m2wDVsG4tt-lRYoBa-FtFK3hrAtBwCVCMDGYAnbVN6tUnzMkIHACWyEQF46_xMYFh_J_U1V38_e9AUgczJxugL8pinoJ4gMbOBlaDsLq6EQJrAKOvDfDEE09gdnZ2tFUCsLCwEMQHNAkuHoA8L6pmCGo4AxTn_yVgd7wEJATXrw5-9dVXsXPnzphVqsTbb7-NL7_8cuTlrAfMBMm63bgQD8DVE0XDYAQSwFmvV6_OgcB6waNSA01RAU2pRxHWCeSFhpejrBtoBIb-f3V-4fwuCGYr-ps0GdSUehQRxgMW4wEaLAG44rvMM2TIg_fgNKHh1xuFPB6E6ypMmp5kba4EADRxWTkzmTMt_vUE5gAS4MiRI7Xr9GLh9OnTjWUAfyIIJeMv_vK6EagAVcHvzv2dFv-wNgD6jAI-_PDDWNW5Y2FsAONRD3dZQen7sIhrBHoMev3ar9GCedkhQ_2Ps1Po3YyiDVA1y9rQLWLgljSBIVlFtpOUEDIHS9lw3dsMcOGbmwcwx4bOBvq6a7Uzq958oUcAAoyujXRNqENpIqgQGt7giCAnsk4t_COE1AygxYI0c9lJAtSCtRPI2lRec6n2a6gEABxndtY2oq2Hf27DQ_1JDFAPOxcQTgSZ7-xOo2AkO4USIxD_OcgtekyoRXH8b9P0iKC5awN1LS__uN0S3g7_7Hx2UgH9UNpOpxAa3mBHkNJNZ7_fbZ0_BBm-L4jSm2r7QZLQo8BiPEBVsMjwiK4CpMzQMu5fNuNWARIZSAj8y4F_xkp3FZ18DTnnCMa6fVbBmkCJntcsysGUwT16RLJGAuc2b8aJrfdBQiCHgORMbXdvziEglUMbOQQmugAZb6fOy8879OTVP5etl2iBWpPA5Aw4awFCwG0JX_GbJtoAaoyvuJeYISDtu20YABEhEy20W20wGEJkkCwDN2c__WfPq-4v9Rb_WG5ESQKXZ2Zw-oH7kSEDkMG8tlEg00pMpUmzMQ9nqsWYPSKQ97fKY1f25JUomLWAbAJoTQHZBJgy6CC66nwiatGoEmDxwm5Ms9P_vrgSlCETwGSLkGUtTEgTM-TAPYhu026L6OH9xd9fmp7G__7212hBAMhAyNCFQMaKGQwDMDIILQWIBShH5du7TZJAOHb3KhvWzbuHSAAiA7JJcDYBEm3t8KFSEEiDg0IJ15e3YWZGh3556cq9KZARAUJAcBvMKtDpdonONYsk7P0UnhfvX2m1ML_9QbSQoYsMGQQYLWQQALc04RXRLfG1lBBdAHZo6xGjkujlNCo8o3suAaIMEC0wZQAJ7zlGN3yK6wlks4sZ252sWMCkgABkJGDehu10aO-eCsQhOhPw4_QUvvzNr3Aza4OQQSCDQEv3ctXbwY7Yam2eUQ8ZiDP1XOxKqe7thbSB7tFvVrM-gHA3sKpnj4FoDHCrswmAm_ljUdbZRmQrngiJTkWieUR3-jXUifZdSqVr6pwI-Hkiw3__djOuTE2hiww5t0DwiVw4sjlv6ZpmlgmYiy-9qo7UCYzNGtvF_qYo5qt-UzA2YyEaA3xz9ncQrMO-ehkvVHx4dT1Iq1gO5eflO0KqiA4Aay3C6W1T-MOWSXTRQhcZ6jew1PrWxtzVbHRZ6IGVEofqe655ztrrlfk0eBi4ujaNFueADN8RoF58aNiXvQcx93DYGAXj0cgARXgu7D_gdDEL4MIfCZz9VRtdZOiiZdfSVxOxjtjqn6y8P9T_g_Z2-5vb6O0uvbpTxEA0BiBWmv6H5YslnVcmurveW7cV3Z5li58JWN7C-OEBQpcyrCGD_FEoUQ9hx_NSW_gSLXTZP1dGoIT6jWQRnLs8MuTmdzmCeviok2r1zxo-b237NHQ6WNp1qxWrWQx6iWyH_kQHAZ0piYt_0kWnRciRBbtmlMfbg4p1qqiff-y9S2e1GO_d23s9b22ble5DlJ02hpUlLQBTAGYAbNHHKYxx44l7DF0AKwBuALiujys6fV0YllAMIAfQAWC23OxAjZsS4sNv644-H0ojxGCALoBVfW6In2Z9RgMJxwSrUG0_FAMMqwIIbgf7FhLxxwHDBF34b5FZJ2KMJ6jikzA6cMUnISEhISEhISEhISEhISEhISEhISEhISEhIaGM_weSVY4QXdfcmAAAAABJRU5ErkJggg%3D%3D,applications:jetbrains-goland.desktop?iconData=iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAA2wAAANYQHlRq2kAAAgAElEQVR4nO1deXwURdp-qrrnyCQhIQgJdyK3HCo3RFgFdQXUBVFc1mNRFBQV8VoUZdfvY1EUv_UAXVlX8UBFPBAQFQVx8VpQLgVEUCRyH4kk5Jzp7vr-6K7u6p7umckkgbCbN7_6dU93dXel37ee96i3qoEGaqAGaqAG-i8lcrIb4CDiKED9a6NIzKWcUlSfXi4BQAHQ1RdWviFJ8qiT3SAvErlMmFYw-EN_BwCaUU4pIaAnuwEG8R4v_ePi_WMgy6NUAsQqSh2USIKF19cIAELbjhz2fhsAEupXh0qI5JPdAIMIALnr-fNy8rTT_qYm8RpjdrsE75dI12XG7QjTCwMwprz94HeBN2AhwCmDAvVBADj0y3-Vr5ytUdrM9e3VIhMTrW87JzyfMr27MwCMAelSo4EA3gagAFCr2YSTSidbADj0y38dsX2EX0obo9TwhokiQTxBcZ43ez6sns-Me6ZIqX0A-ACEjSoNCJAgEQBS20EzG3eX8p7QDAZVlzk1YazrOY92UAbIDGAGixn0fdkX7JbTeWT6we3vVuAUswOkk_hsYjzf__cz335cloKDNMOwYkLhxzQq7CdR1ATu43ym2A4QvedTCO6KuU9oSznn81W_vPQzdDWgnayXWl06mQhAAMi3j9o0xI_0axXxaILk1ps5LCdUz3nM4zqx5zNm1eU2AAB0kHP7AVgJSy5OCTVwsgSAApDy-k3L6E-6zFGJxTKvt5YIw9zqeRlycesbdSmzMxoG4yH-ZkCa3LgPdERrEIA4xBHUNy37zr8wKuWqqD7jouqIx1x0eDxGu9Wl0GFfPM7vbyIBdEEMyqGzkdrMh7LD9SW2khCdDBuAApBvuOK7Qe18rR_XCKjm0L1O_RtlD3jYBqpHHVWo56wj_laFe_GGmpY_cfxm1r5uD9CgnNVm-YZf3j4A3RU8JeyAE40ABIDUouPY9AFoP0cl0QIYCwm8endUvXheAbGOx-r5zoiO7RonCgA4j3bv909gAyzZqPdq4EQKgBnwubv7E9OY7OsUF_qRADPhziRzn8RmovMayvRicy0d-t55b2YYiBmBZr1h2QGnBJ1oAZAvv3xt75A_6zbXgE8c3R2LobH2xWvFc-bWOC553UDw-0Uh4NX49SlS2ilnCJ4oSSUApMzcc1MG-3o8oxEic_2rUr0oNMZADRUKcQwMCdc79_k1EWMbJkah9hIhutI2XTthH7CO8X0Q-zEuWLLkb9u794M5sASg3tOJEAAT-u_qt-huSL5uisgkYjE1FtPFUbiIwVTOvDCxtmHxHGey5CiOY5rBLjeE4ZYcg104QAUDVTg3MXRpP5xCauBEqAACQB565cpuqYHG9zj1vpvx5mqguakHgVkio9yMPGeP5kQ9QNpktBD4EU-6GYIA0MzXrC_0gaFTwhCsawEgAKTGjXsFL_QPfEYlxA_Et9idTNRc6kfBcxymay71ZMPg03hdFs0tUcfzAJDY422GIICQnCEagv_VAmBC_w3Dlt3CJH9vs_dXg7nxjkchgFN3C9eKhqDEL3BjkWj0UXsjmaO-0w7wy8HuWe0uDBX99NEpMTBUl3qKAJAGXvFRp0aBpvdzvR2hlj439To31FzsAH7c1PMO_S8eM-8t_I4y-ojV473IFJw4ghd1XP-3fXe0-FMvnCIZQnWFAASABDT1Dwnlz1EpCbn1VCCx3s6PefZy44k2phi_RegHjEEdZr-f-VwPqAcBNGaBAeHPE-rw4wxAZ3-7vgBW4xSwA-pCADj0SxOvXT-B-QLnRJAYnAPJM9l5jeZSX3Zhg-nyMWtr_heigefi_0ex1vgf0uTMUyYeUFcCIPUavSw3M5DzoEqslwy4W-vuUCowB9a1zuucOl6EZx7TBwzmi8wVtw72sOhDMT0XM0FE08-lSKGeSEuTUVpa713B2hYA3vt9gxqfN0ehNN1iFgNjDOIfWHTvdTPwXAVBrE_cBYARPaYvMWurMoBq9i0YQDRj5E8zIoLGPmM6_HP0YMw6rzHDi3DsU4Ks33ebfcbCf9-82WhyIpluzKXUOdWmkWIy_6pxP49rmtL67xbDGBjToEHDd1svrMVH_ufRZ5995kfdzDFwxbvahCgCQGo_8sWWGSktH7bn0jNEiIawFq7Fx_3Hkh81DyVz45NCt0Xk3k-u7pr_yXOjnPeuLRVg9v5zm132uEZppqiDNcagagoUVgXGTgiyncoUgIUAiZLgw4C2GnCHL3vcgF6hvhsHSk0KzyF-DAB5_TS1SBoHe2SD1YYAmAGfi6__cTTzhy6JOPS5CgaVqIiwBgRIgPyw0su9iIilzR-eSc8e6e-X0u3bc2hmxUBCy_qBrAyJF2gR9eM1Xf7xNoQpDUDtIAABIOUNn5vdJL3NbG7tcCNMA6BpDIqmIULUBgSIT6L7CMeWAKCdbl3SNOvSH_J9p-86h6YoA4m86SyYvIyWG01j5Xtml94Pfe6CilpUASb098-9-lGFWLN6RGucD9NGTo0sqZNNPILI9Tc986F38lKHbMr3tTh4DvEhn9DlHWGlrca9YcWOY4_vevLNg7BiEmYvrIkAcImUh4zfPpwF9Fk9bu6bqllj9w0IEIcCGb6Okyf3OO3yoj6-luF-kHAOpR-2SPZ2Skn4u3UXfPA6jL4Ih5tZUwGQ2g6a2TgrPe8JhTpmRrogQLiGTmd2djbOPvtsdOzYEc2bN0d6ejpkWUZFRQXKyspw6NAh7Nq1C1u2bEFBQUHNHuagYDCIHj16oGvXrmjTpg0yMjIQCoUQDodx_Phx7N-_Hzt27MCGDRtQWFiY9HMGfjF8vZS5J0MKyiC-GjppDJGC2UdmIFwahm5X8LmLNUYAE_q7nTnp4YgstQDcAzEAoGhWwkd1EUCSJJx__vm45JJL0LVr14Sv27t3L5YvX45ly5ahrKysWs8UqUOHDhgzZgzy8_ORkpIStz5jDN999x2WLl2K1atXQ9Oqp_aIRDKSbauTjn9f-PIv_1i-DUAFgCoAETjiC8n2SQrA3_fGTec3y-y2lBn3sQ3AiCFZFoESqYBSVQy28Q8JP6RXr16YMmUKWrVqlWQzgeLiYrzwwgtYtmxZtYSvadOmmDRpEs4999ykn11QUIAnn3wSGzduTPga8kwepHQ_aooAarmy-6szV18ZKfn5CIASAOXQUcAmAMnMC6AApOyBd2fmdbryHY3SxhzieW69mV_P8_SgQYGCiFYFuu-t-A-gFJMmTcKUKVOQkVGzDhEMBjFgwAB0794da9euRWVlZdxr8vPz8dhjj6Fjx441enZmZiYuvPBChEIhrF-_PiEBJBc3Bg1KoD4KIhGHw5dgAdi-p4rvOfrJFzsBlEJHgAgc8A9UXwCMYV74-45e-hB8oQvEiRkKdSRrEksAVE2BqlVB2htbAHw-Hx588EEMGzYMhNRepLp58-bIycnB6tWrY9a77LLLcO-99yIQCNTKcwkh6Nq1K9q3b481a9ZAVWMvH0AvzgINSKCyIQBJUMXPxe98e92iV6Ezvxw6_CtwCS1XF2MIAOnsGzcMRChzAk_A4MkXtmROY5-fDydgBBJCMHXqVAwaNKiazYpPR44cwVNPPRWzzgUXXIDJkyeD0tofxMvPz8ef__znOrm3SFqVcnjrmN1PQGc81_2uzAeqZwQSAFJ6x7HpoSZd5oaNWT082GNuEW0IqpquDuIZgWPHjsUFF1wQtyE__vgj1q1bhyNHjiASiSAtLQ25ubno1asXmjZtGlW_qqoKDzzwAI4ePep5z44dO2Lq1KlxUaekpARffvklfvzxR1RWViI9PR3NmzfHgAEDXJ8t0uDBgzF27FgsWLDAs05NhwIPvao9cvyXtUdhZ77nwFKiAmCGe7uMeGKaKvs6xWK4zQgkgMIse8BLAFq1aoXx48fHbMTmzZsxd-5cbN--3fU8pRT9-_fHzTffjNzcXPP47NmzsW3bNs_7yrKM6dOnw-fzedYpLCzEc889hw8--MDVsieEoE-fPrj11luRl5fneZ_x48fjiy--wK5duzzrJEtVB8pXbb93wcfQe38ldKPPbQKWSYniEQEgn3HD2t5aWtZtYl6fmbdPHYVYsC-qCi-65ZZbYjJg6dKlmDx5sifzAUDTNHz55ZcYN24cnn_-eWiahoULF2LFihUx_7lRo0ahbdu2nue3bNmCa6-9FsuXL_d06xhjWLduHcaPH4-PPvrI816SJGHSpEkx25MMMYWV7Ph9xSzYoT8m84HEEIDAmNXjz-nxjCIRWez1qqP381FAcasQI2lCckeA3Nxc5OfnezZgxYoVePTRRxNoqk6KomD-_Pn46quvsGPHjphqx-fzYezYsZ7nd-7ciSlTpiTkPQBAOBzGjBkzIEkShg4d6lqnX79-6NChA3bs2JHQPROho4t9TxZ-__Y-xPD53SgeApjQ33LMortVn68b7-0829Y2W8dxzqxDLYOQMRZVLr74Yk_du2_fPsyePdv1unjl---_h6qqMev07dvXU3dHIhFMnz4dFRUV1XqupmmYNWsWjhw54vliR4wY4XptMhQpqvp66y3PvY1qQD-nRARAPn3cym5qauN7xLl0Tui3zbWjjuMEqCJAFXUXgFjBlnnz5qG8vDwpAUiknHfeeZ7PXrZsGX755Zek7ltWVoaXXnrJ896DBg2qFQFgKqv88Y9pM4GIm9VfIwEgMGb10NyBzygS8Yv5-uY8PAEJnLpfFAiOBE7KyclBTk6OawNKS0vx6aefxn0JNaGzzz7b89ybb75Zo3u_9957qKiocD3XrFkztGzZskb3B4BjH6c-d2jt0zth9f6EoJ-Tlw1gQn_mhGW3qD5_bzdXT9T1mrBlwm9mwD6hGkCj8wFOP_10z8Z98803iEQiMf-BIUOGJPJ_2uiTTz4BAKSlpSE7O9u1zsGDB7F79-5q31ukqqoqbNiwwdO-ycvLw969e5O-v3I8sn3bTS_Oh2X4JQz9nGIJgJQ77qNOSkbT-80lWmDfqog-bjIdDITo6baUKGBQQBUlSgC8ej-g-_vxYHHmzJmJ_q8m9e_fH4AeHfQiDv01pS1btngKQHZ2dvLPYFB2T8ybESk_Vga71V-tZFI3ATDCvU39Ve0GPgVKQrynizn-8Zmub_XfCoimuiJAKBSKboFBhYWFdZI_wO8ZDAbr_NnHjh3zPJeSkpL0M0r-1ej1vSv_vBl26K9W7weiBYBDv9T8_vUTIoHgIGeAR3OggTfTjePQQKCASQogRSNArBcgSVKdCkAskmW5Vp4tSd7DLZqmJWf4MYKCBa1XQWd8tax-JznNMh36xy7LrcrIeVCcoGnG-ymgUAZGNYAqoJICIkWMrQIqqfqWKiBUPB4BodEuWayx-szMzLjWdjLEry0tLfWsk5WVVSteRmZmpucziouLk_p_Nix4EuW9Ro-Gznje85OaRyAKgJnkUdTjvDkRStO57x7FdMqZHnFnOhWFwqhHI6A02qA7dOiQZ-M6depU3f-nWnTw4MGYz5blmufMxjJyDxw4UO37lR7qBMpk0NTsi04b_rdsVD-F3Eb8PzSt_sb3_3xNlT94vm74MRDoc6aoMXeKEA0gMLbM2oLDv2bBP9H041D03i9F2wCxLO2ePXtCluWYnsBDDz3kee1FF13keo63oaSkBAcPHnQ1RNPS0tC9e3ds2LDB89nxKBAIoG_fvp7n3aKUzLG1nWMEBe_fDkoBQoivtP_Y8Xj_zqmowSQSUcQpAF9FVvNpRFJ1pkNkJnNhuuZ-XGQ-0UCIAqYpIDTaBti9ezeKioqQlZUV1bjU1FQMGzYMS5Ys8fwH3n77bdfjhJC4AgAA69evx4gRI1zrjRkzBuvXr_d8djy65JJLkJaW5nrup59-qnbu4K6XnoBk2F8SAbTUJn_I6jPpoaKvn6lCkrOQuQowEUArL1pNqKrDt6yCygqIrIDKEXuRIsJxfUvMLT8fAZVV47h-Hzc9uWbNGs8Gjh8_Hn6_v9q6NxaJ9VauXOlZb-jQoejTp09Sur9Ro0a4_vrrPe_98ccfV6vdlQc7gKo-fR1D6BNZKaGNwhf96Y_QO3JS08mibIDghsWvM0Z1BKC68UZNPa6AUmMrHhf2KVUNG0B1GIi6beD2T7_33nueDWzZsiWmTp2aFBO8SKzzxRdfeNohhBDMnDnT9NcTLYQQzJgxA82aNXO9byQSwZIlSxJuM2MEhcvu0JekZQbzjaJl5Nyc3qJXCmpBAAAAJYtv2amVl2xkGgED0SHdZvSJxh_f6jpeNP6oFIEkKZAk3fiTqGqqAGf55ptvsHXrVs9Gjhw5EtOmTTPdwkSK3-_3vJ9YLxwO4-WXX_as26RJE8yfPx_t27dP6LmBQACzZs3COeec43nPpUuX4sCBAwkLQNE_H9e7uNH7ZWNLGUCp3IJes2AUdBSwsgITJFEAeEKvwgo2LgLTF9BjTK9CiGYx2-b2OT0CXUgkLixcKAyX0OvFPfbYYzF77RVXXIFFixaZL9brPq1atcJdd92F22-_3fNezmsWLlwYM0EjJycHCxYswM0334wmTZq4PleSJAwfPhyLFy-OmdVUUlKCOXPmJIxa6sH2oKrf1uvNfej74aw2N0Of9lXtJF8ibGUAQQDpvszcZvL0LatogGVRSQGVwwLM673dCvhYxp49EMSPM0ALg4UrgYoypM2a6tmY--67L-bYPKcjR47gs88-w-7du1FeXm6mZXXr1g1dunSJm9bVo0ePqGOdO3fGggULYiIHoAdvNm_ejG3btqG4uBihUAitW7dGr169Yvr8nO644w6sWrXK83zWG70hN_KDBmVAllD-96fNfMtY29Rd60cdnttvBaygUEIkvikJ-szUVACZ_vu-myY3b3cdN_h0IQib8E4lBZTq8QfiiACKzCeEgakRIFIBVl6K0Mz7PRsTCATwzDPPxHSdakqqquKss85yPTdixAg8_PDDtZqNLNLcuXMxb968mHWaLOpjCoD6_JOIqAGI8RjbSmiiEChlKyqnZoyBPi7gmQTqJFEFaNAlJwKgKvjpvDcYoxpjuhpgGgWYBDCi_2YEDLpacNoH1FANTvXgZQPwUllZicmTJ2Pz5s3ura0h_frrr5gwYYLn89977z385S9_qfZsnkRo3rx5ePbZZxM2XOmhPNBIwLL4EW0AmnYAAMmXekHza5Z0RDWXp3MagSp06QmXfDV3t3b86JdM4wyn4Pswir5PDPtAhS3sK3oGgoDEo9LSUowfPz6m758Mffrppxg5ciTWrl0bs94777yDiRMn4tdff62V55aXl-O---7DnDlzEr-IEdA37wQlxvRgYjCbbyEIgVXosTPyb4dlCyQkBE6jgVuRFIDsb9s_QnI6DyfEGM83gj2E6hE_Qpiu943flIeDJRWUqoZnoIMKYRFAqQRd9VncRimKglWrVuGHH35At27dajQ7aOvWrZg-fTqeffZZlJeXJ3TNnj17sHjxYmRmZqJjx45J5fIzxrBq1SpMnjwZX3_9dcLXpY5phfSXZwMkCFDJGnQjwtJ3xOiDjq0mBzpmaumvlO_6-DgSHBtwSokxFKwbg_CnNUl5aN8KmkJbUKobg1QKm4EevYR1V0-2vAAqRUCIatoDUBWwcCVYWSnIvYkndwL6qNxFF12E0aNHo3fv3jFH1zgdP34cq1atwpIlS-L2-HjUpk0bXH311Rg2bBiaNGmS0LNXrFiB1157LWYGsxfl_P1KpK-4ByyQAlXy2XS-mHVlswH4OQKoZUceqZjefAYSzAp2gwkK3RhMA5Dh-9OGyb7WnSfrxmBYFwLKGW4ckyKQZKcdoAeMCFV1AaiqAisvg3b3Y9V-KZwyMjLQs2dPc3o4R4bKykoUFRWhoKAA33__PbZt2xZ3ClZ1iVKKTp064ayzzkJubi6ysrIgyzI0TbM9-9tvv42bxRSLOl_0CRDM0AVA9tkNPRchiPrNlKOh127ocXT9giJY6WGe5CYA3CVMAdAo_YzL85SJL6-iPtWnCwBnOvcIwqaXQEUEEDwGaGEgUgG1tAzqHU8k_XL-G6jrsNUgwQxo_hQoss_KweQZ2Ea-pdv0O_6bFP5y9_G_nv4s9FyBmKrATbmZASEA4ePb3jqkFh9eqRuAEpgRHBKNQsaI4SUQfV9QTsxYRlO3EWKnaDcUphthzNDFQrBHEgw-yWEAEsdvLTNnIjIzEzIGvawbBsEl9G1Z8QaPDOrWhrGF4CEwCk2wSLhgcAuGC8LJfsH1vYjuHTG2EuyuoHMrOX5D8ndoPP5fw2CFhz3JK-PBJgBliyauC_a-fCdJ9XcQGc4YBTF7u85wjVFdggVBAKP6WCWjdeJj_ycR_4KJGO6FyHTCRwKt3-KWGNuKnNNvA7AccdLEYyEAVwMRAFXavu_f1DRBBWgUjEn6PozebqgBTUQAw7NkJmKc_F5Wn4tXLxcDQaIKcAaG-DlJThmQM2FlL8RBgVgOrg0FpLfvWcJUVqYzX7KYzwu4IFDLOYWbKjj5L7k-FxuDDSQQIV7yEA5JFAjjeHG7XpMMAfC0BeIJgGkMVuz96letcP_7miYw2WkTMEsIuJHotAlO9guu70XU_bEMPje7IMpO8KWNajX6tbxkBQBwqAH_-jd0Y9BUASJjeU-3rH_NiQDwHsZtKIYAOBhpCoPjOKJDwVGFgEiFPYfehBgZQ4nEODVDAMKl7z-wVSs7vsnU_5rDLeRuIuywL44bnOwXXN-Lbdxf7M1ukB-j9_PfJKXxVVn9bsv0QoF4AsDVgAp9nLmKFWywG4OGLYAouNdVgGbGBXSbQNO0hhKj2BgtwL5TGLyQIWpLaKPwsLtv8EKBRBDAZgyy1296nynqr5poB2iGQagJagCWXQCmp5c12AAJIIBXb3eUWMecgSE1PftGr7zBRAXAtAUix3aXaocKljCNewMiEjiihbBiA_owFj3pL7i-FxtTPXq1KSTE2Cf2887AkBQjbzDRqS9iskgESsURMAkaU0CY0PupBDDV6vkaBSgFYzCjhIy5xiMayCAO9xCEQAwE8UAPJQDVAIkCmgZQKgiFI0BEGBBu2uZWAItgrRoGIDEE4KQjQeMWjDbvfCUAq7drkuUGaoJX4IwLNKiA-AgAby_A3dKHmSTCxxFc60mBHs2mrD0Pjg9bV3vyW-DG94fD528Dougzgzi0c8OQcm9A0fdB7LZAAwLEJM5QHrilzJgF5Oz9cPzm9aDb4040kBhQ0rLzTQBWQVg7sLoLRVI0y5tAbAmgekvtYwTEyB9UzEEjy0NoEIBYxD9xBwYwV6ve6vESc2c2ZbpKsNkHBKBEbgm7N5CwAFAAUmDK5wOIP3g2iJUWTsT5g6ZXQMEoMW0DKzTcgACJEB8QgsFgG2OZrvsJDASAwXy-ryE6h1C_lqVvXjGz3OEJJLpOIAXgQ8tut5t5gQIC6JNCNdOCETOJGRVdwgYBiEecyWC6FnDr3UTo5QKDbQw3bQPjOI4dWHHolcuikhMTXijSd_2SjsQfuoBAMXP9KBcECILAJ4OYasAeE4glAJdeemlCkytqSjt27MC___3vOn9OMsThnglegMT05Xlsw7_UUgGew8Pg3oJaQT74n78hiS-GEOhWo490zJ8EolE-LZyAgQlLw5izgMR9MN0LADWHimMJwN13340zzjijZm8wAXrhhRfw1Vdf1flzkiFu9TNA70t6Hk10iFfTz5l6XtgSx2-2_7v5Rd_8cw-sz8aY-QEJCUDg4kdzSDB9LBEWgOAMpsTOeNv6QNyp1QxAqkcqoL60w0nctTNsa3foJ9EGoAj93BugABAp31v46pgXoecH8kUkTRSIJQBcjUis3zXjCUUQwkIQxNgy8N-aKRSmWgADYYawMW4b1I8XX1_a4SShb0VBuwj5xMM4pFRHB24fKNve_79I4a5ieHw7IJ4ASKldr0hX0zKvs5guuH_GxBDCVyWNsgm4PQDBXTz5L54HXeoj8TAuYLcDxKCQBOPr53A_z39rFUfX7Xv99ysR49sBsRaKJABkZfQjVxGJNuOunxMF4FAB0fswhELfxnrxs2bNQuPGjZN_ewnSDz_8UG8FgOt4pxcQbyuigUQATWNK8Zo5j0JnPl9KLmrSaMyVQpGZ6UNms4kmtAvFxCgbMugtJwKOieoAiI0A7777btIv7j-FeCiXMHsgiHgw22sbKdqx6PBnM7-HpfsjEBlhUCwBkP03_WsYkfwdCBS78ScuEgWm2wGiCmBGAQOYvooZIXq9-trz6guJBqCN4YIXYAoDooWDMoBp4aI97970DOy933U5Oa-lYikAGU3yboON8Rz6YfV4m0AYTKeCGgAsXyaOCmggK0znFAI3YYj6bWzLfvl87vFfPhO_G8QXknR9npMIADk4aWUv6g8O4PBuMwAF-NcNQbtAWO6g9Tv5lez-u8iZCyAadoRFj_U7t2rlsa3bXhrxDuxfDvGcJOq2VrAEQGZte91KbJDPEcSAeiMYRMDAmGbCPrWpGUs18GsbECA2cYabNoAD-m1DxQ7oJ4Sx_d---Ijx8Qiu-2POEHYVgNSxr-WpgdDvuH9vGn8mEkCAf1E9OJjPUUDQBA0CEJvckkDiQT8XiqrivR_8vOLuDbBWEI_5yTjArgJM3a90G3oTKCTTaCRuRb-vKRiOunbrn_9uoHjEmeCEfs-kT-gBIjC1bOu_7n8cluGX0PLxIgIQAFLmkPubVKZmXOXWuzmjTfgXw72i6yeqAWJnfgMCxCYqvHauAiQYX11DNPRz1VB0eOPzhd-9thfWl0Pi9n7AQgCz95cPnnA9KGlEoNmYbnPtxMKPCbEAJgqPqBJoA_PjEeWTazUb0OrhXQjQz4WDASxSXvD1G6NeRoKGn0hRCCClnzaK2ax8p_-vCYwVUcEpHNDPAyCUjwpTtH7xKbCqMjClEkSL6OsJERWg1mqj4GsVE9VagZQXyYhJnCAa9dIfkXn4tDp9xuFUGUQOQvanQmFzqgsAAApoSURBVIYEamRR2dLAhKRPZ-_f-dOSxyLlB47DPuCTUG9zCgCV5l99pTTif28Lt2x9LaEklQiDPUZOj80gRFRv11HAMhb1dhAqgfhkMOYHqAqiUVCEAcIZrBrFWGmM71MFlEr69ZJk7Nfu8i9eNGr-OGT_2kpfd6sOKUWWQGQfCE2BTP0AkYxcSjvz3aKBlWWH1ny39JpPYdf9CX88gnvneuBHXxYmHUCj1LyhLeUrZl6n5rYbRWQWJFQ1eqSxdjBRBaZZzKPUWiGMrxFESARgVaCsClArAbUKhIVBiALrAxQqCOEfn4gY10dAJdVaoJoqIHL4hCDAZS9di9xtnev8OQBwIEShUQmQ_YAcAJP90KgERaL6si-SfU0gc8FIaOEPv7zr8v1fz9kGoARAGXQEqLYAEOgC4AcQgr5AVCqAUHqnETm-Kx74o9Km7SVEVn06QzUb402GE4HpogBQBZREQBABYbqKoiQi9HDVWEhSRAB-ji88ZQiCVAUq1S0C_G7BVThjXZ86fYZIh1KACKVQJQmaJEOlFIpEoRJiWwhKXBNIocDBku9fXvxS91kAigGUopqrhAJ2AeAo4Ie-TFyKUYIAghk9rmhNL59yHWvd4rdU0iR9rUDFBQXsQkAFFKDGlpCIUM9abdzaV8xVxih1LD5J9UWp6op---bl6LtqSJ3d343KfMCxAEGEEKiUQDGLN_OrWNWRV989d-Tx_V_vh977y2HF_BMm56J7DNagAV81VAGgVh3aVlK5-oUvUvYVryatO2SS9FAeoYzoKkGz7AQhWYQK-3o9vVAZIBIDkQAiwfht3-d1qAQQ2bqGynohEqn18puPhmPwBxeDEumEFolIKJMpiP4tGDBimNRE_DobrMnWAL47-MkjO9bN_gY67HPXr9q60W3VRS4EogCYglC5f9OxipXzPwsV0s9J2zZNSFpKG0IEQaAaKOUMFwTCPMeihYWKgqIJW93zIJRvNeMLpDzxpPao9-fn4LcLr6zVeyZKBDoKAA5mO7ZcGMrCv25-662-s6CqpbD0flKfjfMSACcScGGIGFu1omBtYfmHL64OHc9cR9q2yKapgZb2gSPOXCYw0_quEHcp-RK0gP6bmulloiCoFvPF_INaos6bzsJlz42vtftVmwhQJhsvXejlmgvzGZj24Y65dx3d9VEBdL0vhnyrTbHWXRUFQRQCGyKU__T5kbLlL61Mi7TcyFo3a0FDvhwxfUzct6kEW4-30ILaEMB53kKS2hKANj-2wzWPT6mVeyVLBEC57MFwBxIcKft58YplIxdCZz7X-0n1fiCxL0y4IYIpAHxbuv3Tg2VLX1mRRjpuQ9vGbUhQbuppD3DhsNkOzC4AbuqAqxaOHDWkZvtaYEKM7xecSKqQ40O_okVKXvnyhjvKi3YUwoL-aln9TqrOJ0ZiCQIvWumWlXuPv_Pq-6n-7rtI64w8GqSN3dCA8PkEDgHgMC_qfr4aOSizCUJNKLMwC5MfmFGje9QmVUjxoB_YVvzN019_ce8aWL0_qe8Fi1Ttb8wgWhCi1AIAtXTTRwUlb725LDWz5x7SKrUdDdAML0GIVglO45DZej7fTzbJRPlF2tTmhi5PN6GNlFRfRjYlNPZ3Yk4AVUqxob9SKd01b-nA6VqkXAz41Kj3A8kJAKcEEEFTj69bsatsyQdLQ5k9D9PWKe2Jn6Tx7wyQKLWg2T0CVzXA7GhQTQrvU77ZPGT1fet3vbrz3V1Pr3lr7_y3gqlNdzQmjUjIl55DCK3jwK87Mcngpkfvf-_Q69N2b1-4HZbhF3cl8ESothK1eCCJB5N8sAJKZpHTctKa33nvpf5BWddIKTjNHjgyBoPEiKAQGLIHiaz61aHwwcqvNg5cc69SuqcU-guE0WYfAF8gq0PaLZ3-OqhPep8hpwVb9SEnEBkUChT7ogM-CgEOVR34ZMai1rcDOAbgOKyIX70RAPF-TkEIGMWMKgabtEvPvvPWy_356X-QgsiIKQBmmNiKClqRwsQFILy3_LONv_nXfcrx_cWw9KcGY-4jdIHlRW6U0zvz1tOn_eas9D5DGgdzziYgNf-SdAzSiCEAjuhfhGiVD2-5bfTeTfN-gB7yLYMV9KmxK1RXqZpcECTEQIRAsy6Zze8f__tg39AY6tPSogVAGAp29H4uDIlQeG_ZJxvzP3pAqSgSY-Zh6C-QCysPg_PC2-w7rc25Wbe2vmdIt_Szh2QEmvYgqP3PijEClMjRvX9z2ebn5izp9Th05vMh3xrrfk51masrjjSKghCFCKmt-mRlP3DZVSm9A6OpT0uJGkjyRIH476Fqb-nHm_M_nB6pKCmB_gLFfDkG-zgIRwNenALha376pTm3tZg8pHNa9_PS_U26oJbeISNAqWxnfhmrOHDXql4jKwp3HEYN4v2x6EQkaxOhcEHgL5WjQQqAQHr7Idk508-9Nnim71LqY34bCogCIIwYIoYhWFlQuvzbwR_OEJhfBnu-nNhGc-UVoZ0iekUJQ16nq1vekj1xaPvULkNTfZntavqiymT7wM_S4g_ue_PDS96BNdqXdMjXi05ktr5TEHgvi0KEzDNHtMy5v-e4YFd5GJE12RUF4mQHVf5YsmT9wCUPAZES6C_PyXy3l8jb5yYMMZGhW7eb827I-uMFeWkdzw3Jjdok84LKJaP3U-CoUrjhlsXZ42A3_GrF8hepJm5gMsSEreg68jUIFQBK5aGdpUffXPNleEPTT4LdGzXyZUm5hGrUnIYuxgdcEKBiZ_HbG_KXzjKYz2G_QnhWrB4ULwQegQ7DYfB1EwHl8OFvij4s-OeGhTsfWbwjpHzRijYuT5MbNZWpLy3Rl6NSHghi6hOH_nbnoT2f7oFdcGs9qfJkztcRe5uoGgJwGIvNhl7bPnta1g3BPHkwkVQSyxUs335s4cbB7_wf9F4vwn4izPdqJ9-KqOBEBtFwNJFhSJ8Z3a9Mu3Roq9R2v_HTYMzkwrDR-7dX7Xxz6vIuDyLa8Kv1VKiTKQCc3AQhABcbocWl489oOjVwY7CN1N_yGCxPoHRL0Subh7z7FPSX5oT92nCbRMPWqSZ8cLcZ9N9y0D-898yzLg_99vzmqe0Gy8QX9TVMhQKVTDl23bfDf3fs50_2wErzqq32e_5D9YFEQRDdsihEaPn7iWfm_Em70d-c9uSeQOmmo89vvnDp36Ezvi6Y79Vep80gGo9ORPAD8MnBzODIsx7uOyL1vCHNQ7n5EpHTAD0WsLRyzUNPrxjyCnTdzw2_WnP73P6J-kbxBIEbi4E2E27qk31nxQ2Rgl8_3_Tbpf-ExXzu6tVZz_FoszMQ5qYmbCoimNYyNObMh_pfGBo0JMWXnjV6Ze44hMu44ScGrOqs4fWVRI9BjNaJiOAz6ijQGV4G_aXxyREngvle7XazGZyeBN_KRjvD0NvPEaxGY_2JNra-UyxB4MueqtCZzhdDOFnMd5KXMDjVBA8zc0F2Tu-q0waeKuQmCPwzKM5h6frAfCfFEgY-H5R_nofHKur8_ziVBICTqGf5CxWHpcW5afWVREEQt-L_cUKE-P8Bhwsz62wPS9kAAAAASUVORK5CYII%3D,applications:clementine.desktop,applications:slack.desktop",
                            "middleClickAction": "NewInstance"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "3",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "1080",
                    "DialogWidth": "190"
                }
            },
            "height": 2.5555555555555554,
            "hiding": "normal",
            "location": "left",
            "maximumLength": 60,
            "minimumLength": 58.44444444444444,
            "offset": 0
        },
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/General": {
                            "length": "2079"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "sources": "partitions%2F%2Ffilllevel"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.diskusage"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "memApplicationColor": "255,255,255",
                            "memBuffersColor": "255,0,0",
                            "memCachedColor": "84,84,84",
                            "monitorType": "Circular",
                            "setColorsManually": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.systemloadviewer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/Appearance": {
                            "displayTimezoneAsCode": "false",
                            "lastSelectedTimezone": "Asia/Bishkek",
                            "selectedTimeZones": "Asia/Bishkek",
                            "showLocalTimezone": "true",
                            "use24hFormat": "2"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "show_lockScreen": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.lock_logout"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "83",
                    "DialogWidth": "2560"
                }
            },
            "height": 1.6666666666666667,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 142.22222222222223,
            "minimumLength": 142.22222222222223,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
